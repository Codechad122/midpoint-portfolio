<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue';

import { ref } from 'vue'


const email = ref('')
const phoneNumber = ref('')
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const zipCode = ref('')

const thanks = ref(false)
const displayError = ref(false)
const contactInfo = ["email", "phoneNumber", "firstName", "lastName", "address", "city", "state", "zipCode"]

function thankYou(){
    thanks.value = !thanks.value
    // console.log(
    // bug values not updating. api change in 3.4 ?
    //     email

    // )
    // if (email.value.length == 0 || phoneNumber.value.length == 0 || firstName.value.length == 0 || lastName.value.length == 0 || address.value.length == 0 || city.value.length == 0 || state.value.length == 0 || zipCode.value.length == 0){
    //     displayError.value = true
    //     throw new Error("Fields must not be empty!");
    // } else {
    //     thanks.value = !thanks.value
    // }
}
</script>



<template>
    <header>
        <Navbar />
    </header>

    <div class="bg-[#54372B] text-[#F7E1BC] h-screen flex flex-col mx-auto  gap-4 justify-center items-center p-4">
        <p v-if="displayError">Fields must not be empty!</p>
        <div v-if="!thanks" class="text-black flex flex-col gap-4 shadow-md p-4 bg-stone-200">
            <div class="flex gap-4 flex-col">
                <input v-model="firstName" type="text" placeholder="first name" class="shadow-inner bg-white px-4">
                <input v-model="lastName" type="text" placeholder="last name" class="shadow-inner bg-white px-4">
                <input v-model="address" type="text" placeholder="address" class="shadow-inner bg-white px-4">
                <input v-model="city" type="text" placeholder="city" class="shadow-inner bg-white px-4">
                <input v-model="state" type="text" placeholder="state" class="shadow-inner bg-white px-4">
                <input v-model="zipCode" type="text" placeholder="zip code" class="shadow-inner bg-white px-4">
            </div>
            <button @click="thankYou" class="btn btn-sm">Submit</button>
        </div>

        <div v-else >
            <p>Thanks for purchasing</p>
        </div>

    </div>


    <Footer />
</template>
