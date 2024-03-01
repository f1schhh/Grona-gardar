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

            <!--Show following div is cart is empty-->
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
            <!--Show this div if items in cart > 0-->
            <div v-else class="cart-products-container">

                <div v-for="product in cartMirror" class="single-product-wrapper">

                    <div class="product-image-wrapper">
                        <router-link :to="`/product/${product.pId}`">
                            <img :src="product.pImage" alt="">
                        </router-link>

                    </div>

                    <div class="product-data-and-controls-container">
                        <div class="product-data-container">

                            <div class="product-data-wrapper">
                                <div class="p-name">
                                    <router-link :to="`/product/${product.pId}`">
                                        {{ product.pName }}
                                    </router-link>
                                </div>
                                <div class="p-type">
                                    {{ product.pType }}
                                </div>
                                <div class="p-price">
                                    {{ product.pPrice }} kr/kg
                                </div>
                            </div>

                        </div>

                        <div class="controls-container">
                            <div class="controls-wrapper">
                                <button @click="decreaseProduct(product.pId)">-</button>
                                <p>{{ product.pQuantity }}</p>
                                <button @click="increaseProduct(product.pId)">+</button>

                            </div>
                        </div>

                    </div>




                </div>


            </div>

        </div>

        <div v-if="this.itemsInCart === 0" class="empty-cart-footer">

            <div @click="exitCart" class="back-button">
                <i class="bi bi-arrow-left"></i>
                <p>Tillbaka</p>
            </div>

        </div>

        <div v-else class="to-checkout-footer">
            <p class="tot-cart-price"><b>Totalt: X XXX kr</b></p>
            <div class="to-checkout-btn">
                <p>Till kassan</p>
                <i class="bi bi-chevron-right"></i>
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
            itemsInCart: null,
            cartMirror: null,
            productStore: null, // Store the store instance
        }
    },
    created() {

        // Initialize the store instance
        this.productStore = useProductStore();
    },
    props: {
        onCartClick: Boolean,

    },
    computed: {


    },
    emits: ['overlay-clicked'],
    methods: {

        //Method used to make cart visible
        cartClicked(isCartClicked) {

            if (isCartClicked === true && this.isCartVisible === false) {

                //Toggle isCartVisible to show overlay and cart
                this.isCartVisible = true;

                //Increase blur of overlay by adding class
                setTimeout(() => {
                    document.querySelector(".cart-overlay").style.transition = "background-color 1s, backdrop-filter 1s";
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


        onIncomingProduct() {
            // Retrieve the Pinia store instance
            const productStore = useProductStore();
            const products = productStore.products;

            // Set itemsInCart based on the number of products
            if (products.length > 0) {

                // Calculate the sum of all pQuantity values
                const totalQuantity = products.reduce((acc, product) => acc + product.pQuantity, 0);

                // Set itemsInCart to the sum of all pQuantity values
                this.itemsInCart = totalQuantity;

            } else {
                // If there are no products, set itemsInCart to 0
                this.itemsInCart = 0;
            }

            //add cart products into a local component variable
            this.cartMirror = products;

            // Log products in varukorg
            console.log("Products in varukorg:", products);
        },

        //Method that reduces items in the pinia cart
        decreaseProduct(productId) {
            // Find the index of the current product in the store's products array
            const productIndex = this.productStore.products.findIndex(product => product.pId === productId);
            // If the product is found and its quantity is greater than 0, decrease its quantity
            if (productIndex !== -1) {
                if (this.productStore.products[productIndex].pQuantity > 0) {
                    this.productStore.products[productIndex].pQuantity--;
                }
                // If the quantity becomes 0 after decrementing, remove the product from the store
                if (this.productStore.products[productIndex].pQuantity === 0) {
                    this.productStore.products.splice(productIndex, 1);
                }
            }
        },
        //Method that increases product quantity in the pinia cart
        increaseProduct(productId) {
            // Find the index of the current product in the store's products array
            const productIndex = this.productStore.products.findIndex(product => product.pId === productId);
            // If the product is found, increase its quantity
            if (productIndex !== -1) {
                this.productStore.products[productIndex].pQuantity++;
            }
        },

    },
    watch: {

        onCartClick(newValue) {
            if (newValue && !this.isCartVisible) {
                this.cartClicked(newValue);
            }
        },
        // Watch for changes in the products state and call onIncomingProductId method
        'productStore.products': {
            handler() {
                this.onIncomingProduct();
            },
            // Deep watch ensures changes in nested properties are detected
            deep: true,
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
    width: 280px;
    height: 100vh;
    right: -340px;
    top: 0;
    background-color: var(--mid-beige);
    position: fixed;
    z-index: 3;
    transition: right 0.75s;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.4);
    padding-left: 0px;
    padding-right: 15px;
}

.move-cart-content-container {
    right: 0;
}

.exit-cart-content-container {
    height: 68px;
    width: 100%;
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
    margin-right: 7px;
}

.exit-cart-content-container h1 {
    font-size: 4.45vw;
    text-align: center;
}

.underline {
    height: 1.5px;
    width: 100%;
    left: 25px;
    background-color: rgba(71, 81, 51, 0.2);
    top: 67px;
    position: absolute;
    transform: translateX(-25px);
}

.products-overview-container {
    width: 100%;
    height: 69.5%;
    overflow-y: scroll;
    padding-left: 10px;
}


/* Hiding scrollbar for Chrome, Safari and Opera */
.products-overview-container::-webkit-scrollbar {
    display: none;
}

/* Hiding scrollbar for IE, Edge and Firefox */
.products-overview-container {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE and Edge */
}

.cart-products-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.single-product-wrapper {
    background-color: var(--dark-beige);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    width: 90%;
    height: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.product-image-wrapper {
    width: 40%;
}

.product-image-wrapper img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.product-data-and-controls-container {
    width: 60%;
}

.product-data-container {
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-data-wrapper {

    width: 85%;
    height: 80%;
}

.p-name {
    font-weight: bolder;
}

.p-name,
.p-type,
.p-price {
    font-size: 13px;
}

.controls-container {
    height: 35%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.controls-wrapper {
    background-color: var(--mid-beige);
    border-radius: 16px;
    height: 20px;
    width: 60px;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
}

.controls-wrapper button {
    background-color: var(--light-beige);
    border: none;
    width: 20px;
    border-radius: 16px;
    transition: box-shadow 0.3s;
}

.controls-wrapper button:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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
    height: 20%;
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
    background-color: var(--mid-beige);
}

.back-button {
    background-color: var(--dark-beige);
    border-radius: 26px;
    padding: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 0.3s;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.back-button:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.bi-arrow-left {
    margin-right: 5px;
    font-size: 18px;
}


.to-checkout-footer {
    height: 20%;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -webkit-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    -moz-box-shadow: -2px -5px 5px 1px rgba(71, 81, 51, 0.13);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    background-color: var(--mid-beige);
}


.tot-cart-price {
    width: fit-content;
    margin-top: 10px;
    font-size: 12px;
}

.to-checkout-btn {
    background-color: var(--dark-beige);
    height: 20px;
    border-radius: 26px;
    margin-top: 15px;
    padding: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: box-shadow 0.3s;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.to-checkout-btn:active {
    box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.bi-chevron-right {

    height: 16px;
}

@media screen and (min-width: 451px) {
    .cart-content-container h1 {
        font-size: 20px;
    }

}
</style>
