<script setup>
    import Footer from './Footer.vue';
    import Navbar from './Navbar.vue'

    const images = ["/coffee_beans_wooden_table_2.jpeg", "/coffee_cups.jpeg", "/coffee_beans_wooden_table.jpeg"]
    const textData = [
        "Indulge your senses in the rich and aromatic experience of our carefully curated coffee selection. Our beans are expertly sourced and roasted to perfection, ensuring a cup of coffee that tantalizes your taste buds with a harmonious blend of flavors.",
        "At the core of our mission is a commitment to redefine the coffee experience. We strive to bring joy to every coffee enthusiast by delivering exceptional quality, sustainability, and passion in every cup. Our mission is to source the finest beans from around the world, ensuring ethical practices and supporting local communities.",
        "Our passion is ignited by the pursuit of coffee perfection. From the moment the beans are selected to the final pour, we pour our hearts into crafting an unparalleled coffee experience. We are driven by a love for exceptional flavors, meticulous attention to detail, and a dedication to quality that defines every aspect of our process."
    ]
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="flex h-screen flex-col mx-auto justify-center p-4 text-[#F7E1BC] bg-[#54372B] gap-4">
        <h1 class="text-4xl text-center">About us</h1>
        <div v-for="item, index in images" :key="item">
            <div class="max-w-6xl flex gap-4 justify-center mx-auto flex-wrap">
                <div v-if="index % 2 != 0" class="w-full flex items-center justify-between p-4 gap-4">
                    <p class="border-2 w-full p-2">{{ textData[index] }}</p>
                    <img :src="item" class="h-64 rounded-full"/>
                </div>
                <div v-if="index % 2 == 0" class="w-full flex items-center justify-between p-4 gap-4">
                    <img :src="item" class="h-64 rounded-full"/>
                    <p class="border-2 w-full p-2">{{ textData[index] }}</p>
                </div>
                
            </div>
        </div>
    </main>
    <Footer />
</template>