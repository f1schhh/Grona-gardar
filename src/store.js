import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {

    //Actions is somewhat of a methods section in options API
    actions: {
        increment() {

        }
    },

    //Pinia uses state as its central storage variable
    state: () => ({ productId: 69 })

})
