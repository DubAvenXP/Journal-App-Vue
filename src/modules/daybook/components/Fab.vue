<template>
    <button class="btn btn-primary" @click="$emit('on:click')">
        <i :class="getIcon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa-plus'
        }
    },
    computed: {
        getIcon() {
            return `fa fa-2x ${this.icon}`;
        }
    }
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 60px;
        position: fixed;
        right: 20px;
        width: 60px;
    }
</style>