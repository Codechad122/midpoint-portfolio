<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()

const route = useRoute()
const id = route.fullPath.split('/')[route.fullPath.split('/').length - 1]

const mapping = {
    1: {
        title: "Brazilian Santos",
        price: 25.00,
        description: "a delightful coffee that offers a smooth and mellow flavor profile. Sourced from the renowned coffee-growing regions of Brazil, this light roast highlights the natural sweetness and delicate nuances of the beans. Expect subtle notes of nuts, mild citrus, and a touch of chocolate, all wrapped in a balanced and clean body.",
        image: "/Brazilian-Santos-light.jpg"
    },
    2: {
        title: "Colombian Supremo",
        price: 30.00,
        description: "a high-quality coffee made from the finest Arabica beans sourced from Colombia's premier coffee-growing regions. Known for its well-balanced and full-bodied flavor, this coffee features a smooth and rich profile with notes of caramel, nuts, and a hint of chocolate.",
        image: "/Colombian-Supremo-light-roast.jpg"
    },
    3: {
        title: "Costa Rican Tarrazu",
        price: 15.00,
        description: "a premium coffee renowned for its bright and vibrant flavor profile. Sourced from the high-altitude Tarrazu region, this light roast brings out the beans' natural complexity and clean finish. Expect lively notes of citrus and tropical fruits, complemented by a subtle sweetness and floral undertones.",
        image: "/Costa-Rican-Tarrazu-light.jpg"
    },
    4: {
        title: "Ethiopian Yirgacheffe",
        price: 10.00,
        description: "a premium coffee celebrated for its unique and complex flavor profile. Sourced from the renowned Yirgacheffe region, this medium roast highlights the coffee's natural bright acidity and vibrant, fruity notes. Expect delightful hints of citrus, floral undertones, and a subtle tea-like finish, all wrapped in a smooth and balanced body.",
        image: "/Ethiopian-Yirgacheffe-medium-roast-beans.jpg"
    },
    5: {
        title: "Guatemalan Antigua",
        price: 9.95,
        description: " a distinguished coffee known for its rich and balanced flavor profile. Sourced from the volcanic soils of the Antigua region in Guatemala, this medium roast highlights the beans' natural depth and complexity. Expect a harmonious blend of chocolate and nutty notes, complemented by hints of spice and a mild, fruity acidity.",
        image: "/Guatemalan-Antigua-medium-roast.jpg"
    },
    6: {
        title: "Hawaiian Kona",
        price: 45.50,
        description: "a premium coffee renowned for its smooth and rich flavor. Sourced from the fertile slopes of Hawaii's Kona region, this dark roast brings out the beans' natural sweetness and depth. Expect a full-bodied cup with notes of dark chocolate, toasted nuts, and a hint of caramel, accompanied by a mild fruitiness.",
        image: "/Hawaiian-Kona-dark-roast.jpg"
    },
    7: {
        title: "Jamaican Blue Mountain",
        price: 25.95,
        description: " a rare and exquisite coffee known for its smooth and rich flavor profile. Grown in the esteemed Blue Mountain region of Jamaica, this dark roast accentuates the beans' natural sweetness and depth. Expect a harmonious blend of rich chocolate, warm spices, and a hint of citrus, all wrapped in a velvety, full-bodied texture.",
        image: "/Jamaican-Blue-Mountain-dark-roast.jpg"
    },
    8: {
        title: "Mexican Altura",
        price: 20.95,
        description: "a high-quality coffee celebrated for its vibrant and complex flavor profile. Sourced from the fertile highlands of Kenya, this medium roast showcases the beans' distinctive characteristics with bright acidity and a rich, full body. Expect bold notes of blackcurrant, citrus, and berry, accompanied by undertones of wine and a hint of floral aroma.",
        image: "/Kenyan-AA-medium-roast.jpg"
    },
    9: {
        title: "roasted aromatic",
        price: 40.00,
        description: "a delightful coffee known for its smooth and balanced flavor profile. Sourced from the high-altitude regions of Mexico, this medium roast highlights the beans' nuanced characteristics with a vibrant acidity and a medium body. Expect subtle notes of milk chocolate, nuts, and a hint of citrus, all wrapped in a clean and crisp finish.",
        image: "/Mexican-Altura-Medium-Roast.jpg"
    },
    10: {
        title: "Robusta beans",
        price: 20.95,
        description: "This dark roast offers a rich, bold flavor profile with deep notes of chocolate, caramel, and a hint of smokiness. Perfect for those who appreciate a strong, intense coffee experience, it delivers a smooth, velvety finish with low acidity, making it an ideal choice for espresso lovers and those seeking a powerful coffee kick.",
        image: "/roasted-aromatic-beans-pound.jpg"
    },
    11: {
        title: "Sumatra Mandheling",
        price: 40.00,
        description: " a distinctive coffee made from select Robusta beans, offering a strong and full-bodied flavor. This medium roast brings out a harmonious balance of bold earthy notes, nutty undertones, and hints of dark chocolate.",
        image: "/Robusta-beans-medium-roast.jpg"
    },
    12: {
        title: "Tanzanian Peaberry",
        price: 30.00,
        description: "a rich and full-bodied coffee known for its unique and complex flavor profile. Sourced from the Mandheling region of Sumatra, Indonesia, this dark roast showcases deep, earthy notes with hints of dark chocolate, spice, and a touch of sweetness. Its low acidity and heavy, syrupy body make for a smooth and satisfying cup, ideal for those who prefer a bold and intense coffee experience.",
        image: "/Sumatra-Mandheling-dark-roast.jpg"
    },
    13: {
        title: "Vietnamese Arabica",
        price: 40.00,
        description: "a special coffee known for its unique shape and exceptional flavor profile. Peaberries are small, round coffee beans that develop singularly inside the coffee cherry, resulting in a concentrated flavor. Sourced from the lush landscapes of Tanzania, this light roast accentuates the beans' natural brightness and complexity. Expect vibrant notes of citrus, berries, and floral undertones, with a delicate acidity and a smooth, clean finish.",
        image: "/Tanzanian-Peaberry-light-roast.jpg"
    },
    14: {
        title: "product 14",
        price: 40.00,
        description: "a delightful and refreshing coffee experience, highlighting the unique flavors of Arabica beans grown in Vietnam's fertile regions. This light roast brings out the beans' natural brightness and subtle nuances, with a delicate acidity and a light body. Expect notes of floral sweetness, hints of citrus, and a gentle nuttiness, all harmoniously balanced for a smooth and enjoyable cup.",
        image: "/Vietnamese-Arabica-light-roast.jpg"
    },
}



</script>

<template>
    <header>
        <Navbar />
    </header>
    <main class="grid grid-cols-2 h-screen gap-4 p-4 bg-[#54372B]">
        
        <div class="card shadow-sm h-96 ">
            <figure class="px-10 pt-10">
                <img
                :src="mapping[id].image"
                alt="Shoes"
                class="rounded-xl" />
            </figure>
        </div>

        <div class="text-[#F7E1BC] p-4">
            <h2 class="text-center text-2xl">{{ mapping[id].title }}</h2>
            <div class="flex flex-col gap-4">
                <span class="text-lg font-bold">${{ mapping[id].price }}</span>
                <p class="text-lg">{{ mapping[id].description }}</p>
                <h2 class="text-lg font-bold">Quantity</h2>
                <div class="flex flex-wrap gap-4">
                    <input type="number" class="input w-24">
                    <button class="btn shadow-md rounded-md" @click="store.addItem({title: mapping[id].title, price: mapping[id].price})">Add to cart</button>
                    <button class="btn shadow-md rounded-md">Buy now</button>
                </div>
            </div>
        </div>

    </main>
    <Footer />

</template>