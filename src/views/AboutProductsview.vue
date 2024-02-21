<script>
export default {
  data() {
    return {
      productData: null,
      similiarData: null,
    }
  },
  async created() {
    await this.getProducts(parseInt(this.$route.params.id));
    await this.getSimilarProducts();
  },
  watch: {
    async "$route.params.id"(newId) {
      await this.getProducts(parseInt(this.$route.params.id), newId);
      await this.getSimilarProducts();
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
        } else {
          this.$router.push('/error');
        }

      } catch {
        this.$router.push('/error');
      }
    },
    async getSimilarProducts() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();

        const products = data.products.filter(item => item.category === this.productData.category);
        if (products) {
          this.similiarData = products;
        }
      } catch {

      }
    }
  }
}
</script>


<template>
  <section v-if="productData">
    <nav>
      <ul class="bread-crumb-meny">
        <li><router-link to="/">Hem</router-link> <i class="bi bi-chevron-right"></i></li>
        <li><router-link to="/products">Produkter</router-link> <i class="bi bi-chevron-right"></i></li>
        <li><router-link to="/">{{ productData.category }}</router-link> <i class="bi bi-chevron-right"></i>
        </li>
        <li><router-link to="/" class="active">{{ productData.product_name }}</router-link>
        </li>
      </ul>
    </nav>

    <div class="specific_product">
      <div class="product_information">
        <div class="img-wrapper">
          <img :src="productData.product_image" :alt="productData.product_name">
        </div>
        <div class="product-container">
          <div class="product_info">
            <span class="title-bold">{{ productData.product_name }}</span>
            <span>{{ productData.price }}kr/kg</span>
            <span class="title-bold">{{ productData.description_title }}</span>
            <p>
              {{ productData.description }}
            </p>
          </div>
          <div class="product_navigation">
            <button class="add_to_cart">Lägg i varukorg</button>
          </div>
        </div>
      </div>
    </div>

    <div class="similiar_products">
      <h3>Liknande varor </h3>

      <ul class="similiar_list" v-if="similiarData">
        <router-link :to="'/product/' + items.id" v-for="items in similiarData" :key="items.id">
          <li class="specific_product">
            <div class="product_information" style="flex-direction: column; padding: 1rem;">
              <div class="img-list">
                <img :src="items.product_image" :alt="items.product_name">
              </div>
              <div class="product_info" style="flex-direction: column;">
                <span class="title-bold">{{ items.product_name }}</span>
                <span>{{ items.product_type }} </span>
                <span>{{ items.price }}kr/kg</span>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
      <div class="loading-items" v-else>
        <div v-if="productData === 0">
          <h2>Vi kunde inte hitta några resultat, vänligen försök igen</h2>
        </div>
        <div class="loading-spinner-container" v-else>
          <div class="loading-spinner">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.bread-crumb-meny {
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  gap: 0.2rem
}

.bread-crumb-meny li .active {
  font-weight: bolder;
}

.bread-crumb-meny li a:hover {
  text-decoration: underline;
}

section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
  padding: 2rem;
}

.product_info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
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

.img-list {
  width: 10rem;
  height: 10rem;
}

.img-list img {
  width: 100%;
  height: 100%;
  border-radius: 19px;
  object-fit: cover;
  object-position: center;
}

.product-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
}

.product-container p {
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

.similiar_products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.similiar_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

@media screen and (min-width: 680px) {
  .product_information {
    flex-direction: row;
  }

  .product-container {
    justify-content: space-between;
  }

  .img-wrapper {
    width: 30rem;
  }

  .title-bold {
    font-size: 1.3rem;
  }

}
</style>
