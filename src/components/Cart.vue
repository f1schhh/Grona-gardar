<template>
    <div class="cart-content-container">

        <div class="exit-cart-content-container">

            <div @click="exitCart" class="exit-cart-icon-wrapper">
                <i class="bi bi-x-lg"></i>
            </div>
        </div>

        <h1>Din Varukorg</h1>

        <div class="products-overview-container">

            <div class="single-product-wrapper">
                <div class="product-image-wrapper">
                </div>
                <div class="single-product-info-wrapper">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { useCounterStore } from '../store';

export default {
    components: {

    },
    data() {
        return {
            isCartShowed: false
        }
    },
    created() {

        this.onIncomingProductId();
    },
    props: {


    },
    computed: {



    },
    methods: {
        //method for exiting cart
        exitCart() {
            //Select elements from DOM
            const cartContentContainer = document.querySelector(".cart-content-container");
            const overlay = document.querySelector(".overlay-for-cart");

            //Make cart content dissapear to the right
            cartContentContainer.classList.remove("move-cart-content-container")

            //Transition opacity to make div transparent
            overlay.classList.remove("increase-blur-when-using-cart")

            //Remove overlay styles once transition has finished
            setTimeout(function () {
                overlay.style.display = "none";
            }, 500)
        },

        onIncomingProductId() {
            //Retrieve the Pinia store instance
            const counterStore = useCounterStore();
            counterStore.productId = "500";

            //Access the productId from the store
            const productId = counterStore.productId;

            console.log(productId);
        },

    },
    watch: {

    },

}
</script>



<style scoped>
.cart-content-container {
    width: 230px;
    height: 100vh;
    right: -280px;
    top: 0;
    background-color: var(--mid-beige);
    position: absolute;
    z-index: 3;
    transition: right 0.75s;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.4);
    padding-left: 25px;
    padding-right: 25px;
}

.move-cart-content-container {
    right: 0;
}

.exit-cart-content-container {
    height: 68px;
    margin-top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.exit-cart-icon-wrapper {
    width: fit-content;
    height: fit-content;
    line-height: 10px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
}

.cart-content-container h1 {
    font-size: 4.45vw;
    text-align: center;

}

.products-overview-container {
    background-color: coral;
    width: 100%;
}

.single-product-wrapper {
    background-color: lightblue;
    width: 100%;
    height: 100px;
    border-radius: 19px;
}

@media screen and (min-width: 451px) {
    .cart-content-container h1 {
        font-size: 20px;
    }

}
</style>
