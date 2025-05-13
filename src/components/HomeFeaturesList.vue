<script setup>
const data = [
    {title: "Discover Our Premium Coffee Selection", info: "Explore our curated collection of the finest coffees, each crafted to deliver a rich and unparalleled flavor experience.", link: "/products/1" , button: "Featured Product", image: "/Brazilian-Santos-light.jpg"},
    {title: "Experience Artisanal Coffee Craftsmanship", info: "Delve into the world of artisanal coffee, where every brew is a masterpiece of flavor and quality.", link: "/products/11" , button: "Featured Product", image: "/Sumatra-Mandheling-dark-roast.jpg"},
    {title: "Elevate Your Coffee Ritual", info: "Transform your daily coffee routine with our exceptional brews, designed for true coffee connoisseurs.", link: "/products/13", button: "Featured Product", image:"/Vietnamese-Arabica-light-roast.jpg"}
]

</script>

<template>
    <div v-for="n in data" :key="n" class="max-w-full text-[#F7E1BC]">
        <div class="card bg-[#221518] w-96 shadow-sm h-96">
            <figure class="px-10 pt-10">
                <img
                :src="n.image"
                :alt="n.title"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ n.title }}</h2>
                <p>{{ n.info }}</p>
                <div class="card-actions">
                <button class="btn btn-primary">
                    <a :href="n.link">
                        {{ n.button }}
                    </a>
                </button>
                </div>
            </div>
        </div>
    </div>
</template>