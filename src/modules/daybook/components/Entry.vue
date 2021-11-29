<template>
    <div
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-1 fw-light">2021</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, veniam omnis. Incidunt eos, accusantium debitis dolore
            et ex, voluptatum blanditiis eius voluptate cupiditate inventore, id
            quas quis fugit facere natus.
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: all 0.2s ease-in;
    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: all 0.2s ease-in;
    }
    .entry-description {
        font-size: 12px;
    }
}
</style>
