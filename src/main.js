import './assets/main.css'

import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Products from './components/Products.vue'

const routes = [
    {path: '/', component: Home},
    {path: "/about", component: About},
    {path: "/contact", component: Contact},
    {path: "/products", component: Products}
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')
