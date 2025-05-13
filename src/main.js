import './assets/main.css'

import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Products from './components/Products.vue'
import ProductPage from './components/ProductPage.vue'
import Checkout from './components/Checkout.vue'

const routes = [
    {path: '/', component: Home},
    {path: "/about", component: About},
    {path: "/contact", component: Contact},
    {path: "/products", component: Products},
    {path: "/products/:id", component: ProductPage},
    {path: "/checkout", component: Checkout}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
