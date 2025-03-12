<script setup>
    import feather from 'feather-icons';
    import { ref } from 'vue'
    const cartItems = ref(0)

    console.log(feather.icons['shopping-bag'].toSvg())
// <svg class="feather feather-x" ...><line ... /><line ... /></svg>

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl"><RouterLink to="/">Store</RouterLink></a>
        </div>
        <div class="flex items-center">
            <ul class="menu menu-horizontal px-1">
                <li><RouterLink to="/products">Products</RouterLink></li>
                <li><RouterLink to="/about">About</RouterLink></li>
                <li><RouterLink to="/contact">Contact</RouterLink></li>
            </ul>
            <button class="flex items-center gap-2 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl p-2">
                <p>{{ cartItems }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <p>Cart</p>
            </button>
        </div>
    </div>

</template>