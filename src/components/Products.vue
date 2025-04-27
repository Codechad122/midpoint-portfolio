<script setup>
import Product from './Product.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue';


const data = [
    {title: "Brazilian Santos", info: "", link: "/products/1", image: "/Brazilian-Santos-light.jpg"},
    {title: "Colombian Supremo", info: "", link: "/products/2", image: "/Colombian-Supremo-light-roast.jpg"},
    {title: "Costa Rican Tarrazu", info: "", link: "/products/3", image: "/Costa-Rican-Tarrazu-light.jpg"},
    {title: "Ethiopian Yirgacheffe", info: "", link: "/products/4", image: "/Ethiopian-Yirgacheffe-medium-roast-beans.jpg"},
    {title: "Guatemalan Antigua", info: "", link: "/products/5", image: "/Guatemalan-Antigua-medium-roast.jpg"},
    {title: "Hawaiian Kona", info: "", link: "/products/6", image: "/Hawaiian-Kona-dark-roast.jpg"},
    {title: "Jamaican Blue Mountain", info: "", link: "/products/7", image: "/Jamaican-Blue-Mountain-dark-roast.jpg"},
    {title: "Mexican Altura", info: "", link: "/products/8", image: "/Mexican-Altura-Medium-Roast.jpg"},
    {title: "roasted aromatic", info: "", link: "/products/9", image: "/roasted-aromatic-beans-pound.jpg"},
    {title: "Robusta beans", info: "", link: "/products/10", image: "/Robusta-beans-medium-roast.jpg"},
    {title: "Sumatra Mandheling", info: "", link: "/products/11", image: "/Sumatra-Mandheling-dark-roast.jpg"},
    {title: "Tanzanian Peaberry", info: "", link: "/products/12", image: "/Tanzanian-Peaberry-light-roast.jpg"},
    {title: "Vietnamese Arabica", info: "", link: "/products/13", image: "/Vietnamese-Arabica-light-roast.jpg"},

    ]
</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="max-w-full mx-auto p-4 flex flex-col text-[#F7E1BC] bg-[#54372B]">
        <div class="h2">
            <h2 class="text-2xl text-center text-[#F7E1BC]">Our Products</h2>
            <div class="grid grid-cols-3 gap-4 bg-[#54372B] p-4">
                <div v-for="n in data" class="flex justify-center" :key="n">
                    <Product :title="n.title" :info="n.info" :link="n.link" :image="n.image"/>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>