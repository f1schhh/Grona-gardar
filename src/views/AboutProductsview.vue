<script>
export default {
  data() {
    return {
      productData: null
    }
  },
  async created() {
    await this.getProducts(parseInt(this.$route.params.id));
  },
  watch: {
    async "this.$route.params.id"(newId) {
      await this.getProducts(parseInt(this.$route.params.id), newId);
    }
  },
  methods: {
    async getProducts(id) {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();

        const product = data.products.find(item => item.id === id);

        if (product) {
          this.productData = product
        }
      } catch {

      }
    }
  }
}
</script>
<template>
  <article id="specific_product">
    <div class="product_information" v-if="productData">
      <div class="img-wrapper">
        <img :src="productData.product_image" alt="">
      </div>
      <div class="product-text">
        <span class="title-bold">{{ productData.product_name }}</span>
        <span>{{ productData.price }}kr/kg</span>
      </div>
      <div class="product-text">
        <span class="title-bold">{{ productData.description_title }}</span>
        <p>
          {{ productData.description }}
        </p>
      </div>

      <div class="product_navigation">
        <div class="go_back"><i class="bi bi-arrow-left"></i> Tillbaka</div>
        <button class="add_to_cart">Lägg i varukorg</button>
      </div>
    </div>
  </article>
</template>
<style scoped>
#specific_product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--dark-beige);
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
  padding: 2rem;
}

.img-wrapper {
  width: 290px;
  height: 221px;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 0px;
  border-top-left-radius: 19px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 19px;
  object-fit: cover;
  object-position: center;
}

.product-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: flex-start;
}

.product-text p {
  margin: 0;
}

.product_navigation {
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  justify-content: space-between;
}

.go_back {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  cursor: pointer;
}

.add_to_cart {
  border: 0;
  text-align: center;
  border-radius: 19px;
  padding: 0.6rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--dusty-pink);
}
</style>
