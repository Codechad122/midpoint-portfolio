<script setup>
const data = [
    {title: "Discover Our Premium Coffee Selection", info: "Explore our curated collection of the finest coffees, each crafted to deliver a rich and unparalleled flavor experience.", button: "Shop Now"},
    {title: "Experience Artisanal Coffee Craftsmanship", info: "Delve into the world of artisanal coffee, where every brew is a masterpiece of flavor and quality.", button: "Learn More"},
    {title: "Elevate Your Coffee Ritual", info: "Transform your daily coffee routine with our exceptional brews, designed for true coffee connoisseurs.", button: "Browse Collection"}
]

</script>

<template>
    <div v-for="n in data" :key="n" class="">
        <div class="card bg-base-100 w-96 shadow-sm h-96">
            <figure class="px-10 pt-10">
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ n.title }}</h2>
                <p>{{ n.info }}</p>
                <div class="card-actions">
                <button class="btn btn-primary">{{ n.button }}</button>
                </div>
            </div>
        </div>
    </div>
</template>