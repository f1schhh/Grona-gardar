<script>
import FavoriteButton from '../components/FavoriteButton.vue';
import AddToCartButton from '../components/AddToCartButton.vue';

export default {
  components: {
    FavoriteButton,
    AddToCartButton
  },
  props: {
    productid: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      productInfo: null,
    }
  },
  methods: {
    async getProductInfo() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();

        if (data) {
          this.productInfo = data.products.find(item => item.id === this.productid);
        }
      } catch {

      }
    },
    onProductClick(id) {
      // Use router.push to navigate to page Search
      this.$router.push(`/product/${id}`)
    },
  },
  async mounted() {
    this.getProductInfo();
  }
}
</script>

<template>

  <div class="specific_product" v-if="productInfo">
    <div class="img-wrapper" @click="onProductClick(productInfo.id)">
      <img :src="productInfo.product_image" :alt="productInfo.product_name">
    </div>
    <div class="product_info_card">
      <div class="h3_and_heart">
        <h3><router-link :to="`/product/${productInfo.id}`" class="router-link-custom">{{ productInfo.product_name
                }}</router-link></h3>
        <FavoriteButton :id="productInfo.id" />
      </div>
      <div class="product_type">
        {{ productInfo.product_type }}
        <span>{{ productInfo.price }} kr/kg</span>
      </div>
      <div style="display: flex; flex-direction: row; justify-content: flex-end;">
        <AddToCartButton :id="productInfo.id" />
      </div>
    </div>
  </div>
  <div class="loading-spinner-container" v-else>
    <div class="loading-spinner">
      <div></div>
    </div>
  </div>

</template>

<style scoped>
.img-wrapper img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 19px;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  object-fit: cover;
  object-position: center;
}

.img-wrapper img:hover {
  cursor: pointer;
}

.h3_and_heart {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-weight: 700;
}

.product_info_card {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.button_cart {
  padding-left: 0.5rem
}

.product_type {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  min-height: 3rem;
}
</style>
