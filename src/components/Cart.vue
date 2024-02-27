<template>
    <div @click="exitCart" v-if="isCartVisible" class="cart-overlay"></div>

    <div v-if="isCartVisible" class="cart-content-container">

        <div class="exit-cart-content-container">
            <div class="title-container">
                <h1>Varukorg ({{ this.itemsInCart }})</h1>
            </div>


            <div @click="exitCart" class="exit-cart-icon-wrapper">
                <i class="bi bi-x-lg"></i>
            </div>

        </div>


        <div class="underline"></div>

        <div class="products-overview-container">

            <div v-if="this.itemsInCart === 0" class="empty-cart-container">

                <div class="cart-immage-wrapper">
                    <i class="bi bi-basket3"></i>
                    <div class="zero-items-in-cart-wrapper">
                        <h1>{{ this.itemsInCart }}</h1>
                    </div>
                </div>

                <h5>Din varukorg är tom</h5>

                <p>Du kan behöva logga in för att komma åt tidigare tillagda produkter.</p>
            </div>

            <div v-if="this.itemsInCart === 0" class="empty-cart-footer">

                <div @click="exitCart" class="back-button">
                    <i class="bi bi-arrow-left"></i>
                    <p>Tillbaka</p>
                </div>

            </div>


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
import { useProductStore } from '../store';

export default {
    components: {

    },
    data() {
        return {
            isCartVisible: false,
            productId: null,
            itemsInCart: 0,
        }
    },
    created() {

        this.onIncomingProductId()
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
            const counterStore = useProductStore();
            counterStore.productId = parseInt("2");;

            //Access the productId from the store
            this.productId = counterStore.productId;


            //Fetch data for the product and store it
            this.getProductData(this.productId);


        },

        async getProductData(pId) {

            console.log(pId);

            //Fetch data from JSON-file
            const response = await fetch('/src/database.json');
            const data = await response.json();

            //Match incoming product ID width ID in JSON
            const product = data.products.find(item => item.id === pId);

            console.log(product);
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
    justify-content: center;
    align-items: center;
    position: relative;
}

.exit-cart-icon-wrapper {
    width: fit-content;
    height: fit-content;
    line-height: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    position: absolute;
    right: 0;
}

.exit-cart-content-container h1 {
    font-size: 4.45vw;
    text-align: center;
}

.underline {
    height: 1.5px;
    width: 100%;
    background-color: rgba(71, 81, 51, 0.2);
    top: 67px;
    position: absolute;
    transform: translateX(-25px);
}

.products-overview-container {

    width: 100%;
}

.single-product-wrapper {
    width: 100%;
    border-radius: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.empty-cart-container {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
}

.cart-immage-wrapper {
    font-size: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    width: fit-content;
    border-radius: 46px;
    width: 70px;
    height: 70px;
    background-color: rgba(218, 178, 158, 0.4);


}

.zero-items-in-cart-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    width: 15px;
    height: 15px;
    top: 52.5%;
    border-radius: 86px;
    position: absolute;
    background-color: var(--light-beige);
}

.empty-cart-container h5 {
    text-align: center;
    margin-top: 30px;
}

.empty-cart-container p {
    text-align: center;
    font-size: 12px;
    margin-top: 20px;
}

.empty-cart-footer {
    height: 15%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -webkit-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -moz-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
}

.back-button {
    background-color: var(--dark-beige);
    width: fit-content;
    border-radius: 26px;
    padding: 10px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.bi-arrow-left {
    margin-right: 5px;
    font-size: 18px;
}


@media screen and (min-width: 451px) {
    .cart-content-container h1 {
        font-size: 20px;
    }

}
</style>
