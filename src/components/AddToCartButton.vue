<script>
import { useProductStore } from '../store';
export default {
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    //Method that forwards product ID to a Pinia method
    onAddToCartClick() {

      //Retrieve Pinia store instance
      const productStore = useProductStore();

      //Send product to addProduct function in Pinia as integer
      productStore.addProduct(this.id);
    },
  }
}
</script>

<template>
  <button @click="onAddToCartClick" class="button_cart">Lägg i varukorg</button>
</template>

<style scoped>
.button_cart {

  clear: both;
  background-color: #FFF8EE;
  border: 0;
  text-align: center;
  border-radius: 19px;
  padding: 0.5rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 0.9rem;
}

.button_cart:active {
  box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
