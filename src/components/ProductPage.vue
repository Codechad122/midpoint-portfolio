<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

import { ref } from 'vue'

const props = defineProps({
    title: String,
    info: String,
})

</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="grid grid-cols-2 h-screen gap-4 p-4">
        
        <div class="card bg-green-100 shadow-sm h-96 ">
            <figure class="px-10 pt-10">
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
        </div>
        

        <div class="bg-green-100 p-4">
            <h2 class="text-center text-2xl">I am Product A</h2>
            <div class="flex flex-col gap-4">
                <span class="text-lg">$40.00</span>
                <p class="text-lg">I am a description of product A. I will eventually be replaced with real product info</p>
                <h2 class="text-lg">Quantity</h2>
                <div class="flex flex-wrap gap-4">
                    <input type="number" class="input">
                    <button class="btn">Add to cart</button>
                    <button class="btn">Buy now</button>
                </div>
            </div>
        </div>

    </main>
    <Footer />

</template>