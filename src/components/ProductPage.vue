<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

import { useRoute } from 'vue-router'
const route = useRoute()
const id = route.fullPath.split('/')[route.fullPath.split('/').length - 1]

const mapping = {
    1: {
        title: "Product 1",
        price: 40.00,
        description: "I am a description of product 1",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    2: {
        title: "Product 2",
        price: 40.00,
        description: "I am a description of product 2",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    3: {
        title: "Product 3",
        price: 40.00,
        description: "I am a description of product 3",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    4: {
        title: "Product 4",
        price: 40.00,
        description: "I am a description of product 4",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    5: {
        title: "Product 5",
        price: 40.00,
        description: "I am a description of product 5",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    6: {
        title: "Product 6",
        price: 40.00,
        description: "I am a description of product 6",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    7: {
        title: "Product 7",
        price: 40.00,
        description: "I am a description of product 7",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    8: {
        title: "Product 8",
        price: 40.00,
        description: "I am a description of product 8",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    9: {
        title: "Product 9",
        price: 40.00,
        description: "I am a description of product 9",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    10: {
        title: "Product 10",
        price: 40.00,
        description: "I am a description of product 10",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    11: {
        title: "Product 11",
        price: 40.00,
        description: "I am a description of product 11",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
}


</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="grid grid-cols-2 h-screen gap-4 p-4">
        
        <div class="card bg-green-100 shadow-sm h-96 ">
            <figure class="px-10 pt-10">
                <img
                :src="mapping[id].image"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
        </div>
        
        

        <div class="bg-green-100 p-4">
            <h2 class="text-center text-2xl">{{ mapping[id].title }}</h2>
            <div class="flex flex-col gap-4">
                <span class="text-lg font-bold">${{ mapping[id].price }}</span>
                <p class="text-lg">{{ mapping[id].description }}</p>
                <h2 class="text-lg font-bold">Quantity</h2>
                <div class="flex flex-wrap gap-4">
                    <input type="number" class="input w-24">
                    <button class="btn shadow-md rounded-md">Add to cart</button>
                    <button class="btn shadow-md rounded-md">Buy now</button>
                </div>
            </div>
        </div>

    </main>
    <Footer />

</template>