<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import HomeFeaturesList from './HomeFeaturesList.vue'

</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="max-w-full mx-auto p-4 flex flex-col">
        <div class="flex justify-center">
            <h1 class="text-2xl">
                The Best Coffee That Money Can Buy
            </h1>
        </div>
        <br/>
        <div class="bg-green-100 h-96">
            image will go here

        </div>
        <br />
        <div class="flex justify-center">
            <h2 class="text-2xl">Featured Products</h2>
        </div>
        <br />
        <div class="flex gap-4 justify-center">
            <HomeFeaturesList/>
        </div>

    </main>
    <Footer />

</template>