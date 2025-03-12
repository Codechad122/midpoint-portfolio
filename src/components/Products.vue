<script setup>
import Product from './Product.vue'
import Navbar from './Navbar.vue'
const data = [
    {title: "Product 1", info: "Product info", button: "Click me"},
    {title: "Product 2", info: "Product info", button: "Click me"},
    {title: "Product 3", info: "Product info", button: "Click me"},
    {title: "Product 4", info: "Product info", button: "Click me"},
    {title: "Product 5", info: "Product info", button: "Click me"},
    {title: "Product 6", info: "Product info", button: "Click me"},
    {title: "Product 7", info: "Product info", button: "Click me"},
    {title: "Product 8", info: "Product info", button: "Click me"},
    {title: "Product 9", info: "Product info", button: "Click me"},
    {title: "Product 10", info: "Product info", button: "Click me"},
    {title: "Product 11", info: "Product info", button: "Click me"}
    ]
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="max-w-full mx-auto p-4 flex flex-col">
        <div class="h2">
            <h2 class="text-2xl">Our Products</h2>
            <div v-for="n in data" :key="n">
                <Product :title="n.title" :info="n.info"/>

            </div>
        </div>
    </main>
</template>