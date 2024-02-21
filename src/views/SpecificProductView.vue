<template>
    THIS IS A SPECIFIC PRODUCT
</template>


<script>

export default {
    data() {
        return {


        }
    },
    components: {

    },
    created() {

        //Send incoming prop to fetch product data
        this.getProduct(this.productId);

    },
    methods: {

        //Method that fetches product data based on incoming ID
        getProduct(pId) {

            console.log(pId);
        }

    },
    props: {
        //Icoming product ID
        productId: {
            type: String,
            required: true
        }
    },

    watch: {


    },
}
</script>

<style scoped>
</style>
