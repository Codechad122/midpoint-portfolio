<script setup>
    import feather from 'feather-icons';
    import { ref } from 'vue'
    const cartItems = ref(0)

    console.log(feather.icons['shopping-bag'].toSvg())
// <svg class="feather feather-x" ...><line ... /><line ... /></svg>

</script>

<template>
    <div class="navbar bg-[#54372B] text-[#F7E1BC] shadow-sm">
        <div class="flex-1 item center">
            <a class="btn btn-ghost text-xl"><RouterLink to="/">
                <img src="/brew_haven_logo.png"  width="64" class="p-2"/>
            </RouterLink></a>
        </div>
        <div class="flex items-center">
            <ul class="menu menu-horizontal px-1">
                <div class="flex">
                    <li><RouterLink to="/products">Products</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                    <li><RouterLink to="/contact">Contact</RouterLink></li>
                </div>
            </ul>
            <div class="drawer drawer-end z-50">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <!-- Page content here -->
                    <label for="my-drawer-4" class="drawer-button flex items-center gap-2 cursor-pointer hover:bg-green-100 justify-center w-fit rounded-md p-2">
                        <p>{{ cartItems }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <p>Cart</p>
                    </label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
                    <div class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div class="flex flex-col gap-4">
                            <ul class="">
                            <!-- Sidebar content here -->
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                        <p>Price: $0.00</p>
                        <button class="btn btn-sm">
                            <a href="/Checkout" >
                            purchase
                        </a>
                        </button>
                        </div>
                    </div>
                    
                </div>
                </div>
        </div>
    </div>
    
</template>