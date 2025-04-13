<script setup>
import Product from './Product.vue'
import Navbar from './Navbar.vue'

const data = [
    {title: "Product 1", info: "Product info", link: "/products/1", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 2", info: "Product info", link: "/products/2", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 3", info: "Product info", link: "/products/3", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 4", info: "Product info", link: "/products/4", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 5", info: "Product info", link: "/products/5", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 6", info: "Product info", link: "/products/6", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 7", info: "Product info", link: "/products/7", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 8", info: "Product info", link: "/products/8", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 9", info: "Product info", link: "/products/9", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 10", info: "Product info", link: "/products/10", image: "/Kenyan-AA-medium-roast.jpg"},
    {title: "Product 11", info: "Product info", link: "/products/11", image: "/Kenyan-AA-medium-roast.jpg"}
    ]
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="max-w-full mx-auto p-4 flex flex-col">
        <div class="h2">
            <h2 class="text-2xl text-center">Our Products</h2>
            <div class="grid grid-cols-3 gap-4 bg-green-100 p-4">
                <div v-for="n in data" class="flex justify-center" :key="n">
                    <Product :title="n.title" :info="n.info" :link="n.link" :image="n.image"/>
                </div>
            </div>
        </div>
    </main>
</template>