<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        title: String,
        info: String,
        link: String,
        image: String,
    })

</script>

<template>
    <div class="card bg-[#221518] w-96 shadow-sm h-96">
        <figure class="px-10 pt-10">
            <img
            :src="props.image"
            alt="Shoes"
            class="rounded-xl p-4" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ props.title }}</h2>
            <p>{{ props.info }}</p>
            <div class="card-actions">
            <button class="btn btn-primary"><a :href="props.link">Click Me</a></button>
            </div>
        </div>
    </div>

</template>