<template>
    <div @click="exitCart" v-if="isCartVisible" class="cart-overlay"></div>

    <div v-if="isCartVisible" class="cart-content-container">

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
            isCartVisible: false,
        }
    },
    created() {


    },
    props: {
        onCartClick: Boolean,

    },
    computed: {



    },
    methods: {

        //Method used to make cart visible
        cartClicked(isCartClicked) {

            if (isCartClicked === true && this.isCartVisible === false) {

                //Toggle isCartVisible to show overlay and cart
                this.isCartVisible = true;

                //Increase blur of overlay by adding class
                setTimeout(() => {
                    document.querySelector(".cart-overlay").style.transition = "background-color 1s, backdrop-filter 1s;";
                    document.querySelector(".cart-overlay").classList.add("increase");

                    document.querySelector(".cart-content-container").classList.add("move-cart-content-container")
                }, 100)

            }
        },

        //Emit an event when the overlay is clicked
        exitCart() {
            if (this.isCartVisible === true) {

                document.querySelector(".cart-overlay").style.transition = "background-color 0s, backdrop-filter 0s;";
                document.querySelector(".cart-overlay").classList.remove("increase");
                this.$emit('overlay-clicked');

                document.querySelector(".cart-content-container").classList.remove("move-cart-content-container")

                setTimeout(() => {
                    this.isCartVisible = false;
                }, 950)
            }


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

        onCartClick(newValue) {


            if (newValue === true && this.isCartVisible === false) {
                this.cartClicked(newValue);
            }

        },
    },

}
</script>



<style scoped>
.cart-overlay {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(0px);
    transition: background-color 1s, backdrop-filter 1s;
    width: 100%;
    height: 100%;
    position: fixed;
    opacity: 0.5;
    z-index: 3;
}

.increase {
    background-color: rgba(255, 255, 255, 1.3);
    backdrop-filter: blur(16px);
}


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
