<script setup>
import Product from './Product.vue'
import Navbar from './Navbar.vue'
const data = [
    {title: "Product 1", info: "Product info", button: "Click me"}
    ]
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main>
        <div class="h2">
            <h2 class="text-2xl">Our Products</h2>
            <div v-for="n in data" :key="n">
                <Product :title="n.title" :info="n.info" :button="n.button"/>

            </div>
        </div>
    </main>
</template>