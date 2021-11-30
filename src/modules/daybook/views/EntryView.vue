<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
            </div>
            <div>
                <button v-if="entry.id" class="btn btn-danger mx-2" @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary mx-2">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr />
        <div class="d-flex flex-column px-3 h-75">
            <textarea
                placeholder="¿Qué sucedió hoy?"
                v-model="entry.text"
            ></textarea>
        </div>
        <img
            src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="entry-picture"
            class="img-thumbnail"
        />
    </template>

    <Fab :icon="'fa-save'" @on:click="saveEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
export default {
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            entry: null,
        };
    },
    created() {
        this.loadEntry();
    },
    computed: {
        ...mapGetters("journal", ["getEntryById"]),
        day() {
            const { day } = getDayMonthYear(this.entry.date);
            return day;
        },
        month() {
            const { month } = getDayMonthYear(this.entry.date);
            return month;
        },
        yearDay() {
            const { yearDay } = getDayMonthYear(this.entry.date);
            return yearDay;
        },
    },
    methods: {
        ...mapActions("journal", ["updateEntry", "createEntry", "deleteEntry"]),
        loadEntry() {
            let entry;
            if (this.id === "new") {
                entry = {
                    date: new Date().getTime(),
                    text: "",
                };
            } else {
                entry = this.getEntryById(this.id);
                if (!entry) return this.$router.push({ name: "no-entry" });
            }
            this.entry = entry;
        },
        async saveEntry() {
            if (this.entry.id) {
                await this.updateEntry(this.entry);
            } else {
                const id = await this.createEntry(this.entry);
                this.$router.push({ name: "entry", params: { id } });
            }
        },
        onDeleteEntry() {
            this.deleteEntry(this.entry.id);
            this.$router.push({ name: "no-entry" });
        },
    },
    watch: {
        // id(value, oldValue) {
        id() {
            this.loadEntry();
        },
    },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
