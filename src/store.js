import { defineStore } from "pinia";

// Store for managing products
export const useProductStore = defineStore('product', {
    state: () => ({
        products: []
    }),
    actions: {
        // Define actions to manipulate products
        addProduct(product) {
            this.products.push(product);
        },
        // Other product-related actions
    },
    // Define getters and mutations as needed
});

// Store for managing accounts
export const useAccountStore = defineStore('account', {
    state: () => ({
        accounts: []
    }),
    actions: {
        // Define actions to manipulate accounts
        addAccount(account) {
            this.accounts.push(account);
        },
        // Other account-related actions
    },
    // Define getters and mutations as needed
});
