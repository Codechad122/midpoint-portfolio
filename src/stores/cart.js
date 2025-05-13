import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        if (localStorage.getItem('cart')){
            return {cart: JSON.parse(localStorage.getItem('cart'))}
        } else {
            return {cart: []}
        }
    },

    actions: {
        addItem(item){

            this.cart.push(item)
            localStorage.setItem('cart', JSON.stringify(this.cart))

        },
        removeItem(itemToRemove){
            if (this.cart.length == 0){
                return
            } else {

                let idx = this.cart.findIndex(item => item.title === itemToRemove.title && itemToRemove.price == item.price)
                this.cart.splice(idx, 1)
                console.log(idx, this.cart)

                localStorage.setItem('cart', JSON.stringify(this.cart))

                return this.cart
            }
        },

        getTotal(){
            let total = 0
            for (const i of this.cart){
                total += Number(i.price)
            }

            localStorage.setItem('total', total)
            return Number(total)
        },

        getItems(){
            localStorage.setItem('numItems', this.cart.length)
            return this.cart.length
        }
    }

})