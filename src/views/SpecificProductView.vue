<template>
    <div class="specific-product-container">

    </div>
</template>


<script>

export default {
    data() {
        return {
            specificProductData: null,


        }
    },
    components: {

    },
    created() {



    },
    methods: {

        async getProduct(pId) {


            try {
                console.log("heee", pId)
                //Fetch all products from the json file
                const response = await fetch('/src/database.json');
                const data = await response.json();

                console.log(data);
                const identifiedProduct = data.find(item => item.id === pId);

                console.log(identifiedProduct); // Do something with the fetched data


            } catch (error) {
                // this.$router.push('/error')
                console.log("failed")
            }
        },

    },
    props: {
        //Icoming product ID
        productId: {
            type: String,
            required: true
        }
    },

    watch: {
        productId: {
            immediate: true,
            handler(newProductId) {
                this.getProduct(newProductId);
            }
        }
    },
}
</script>

<style scoped>
.specific-product-container {
    margin-top: 8vw;
    background-color: var(--dark-beige);
    border-radius: 16px;
    width: 90%;
    height: 800px;
}
</style>
