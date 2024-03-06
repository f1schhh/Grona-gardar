<script>
import AddToCartButton from '../components/AddToCartButton.vue';
import ProductCard from '../components/ProductCard.vue';
import SearchBar from '../components/SearchBar.vue';

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
      this.productData = null;
      this.similiarData = null;
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
    },

    categoryLink() {
      switch (this.productData.category) {
        case "Frukt":
          return '/products/fruits'
          break;
        case "Grönsaker":
          return '/products/vegetables'
          break;
      }
    },
    //Method that forwards product ID to a Pinia method
    onAddToCartClick(productId) {

      //Retrieve Pinia store instance
      const productStore = useProductStore();

      //Send product to addProduct function in Pinia as integer
      productStore.addProduct(parseInt(productId));
    },
  },
  components: {
    AddToCartButton,
    ProductCard,
    SearchBar
  }
}
</script>


<template>
  <nav style="padding: 1rem;" v-if="productData">
    <ul class="bread-crumb-meny">
      <li><router-link to="/">Hem</router-link> <i class="bi bi-chevron-right"></i></li>
      <li><router-link to="/products">Produkter</router-link> <i class="bi bi-chevron-right"></i></li>
      <li><router-link :to="categoryLink()">{{ productData.category }}</router-link> <i class="bi bi-chevron-right"></i>
      </li>
      <li><router-link to="/" class="active">{{ productData.product_name }}</router-link>
      </li>
    </ul>
  </nav>
  <section v-if="productData">
    <SearchBar class="searchbar" />
    <div class="product_container">
      <div class="product_information">
        <div class="img-wrapper">
          <img :src="productData.product_image" :alt="productData.product_name">
        </div>
        <div class="product-container">
          <div class="product_info">
            <span class="title-bold">{{ productData.product_name }}</span>
            <span>{{ productData.price }}kr/kg</span>
            <p style="margin-top: 1rem;">
              {{ productData.description }}
            </p>
          </div>
          <div class="product_navigation">
            <router-link to="/products" style="padding: 0.5rem; padding-left: 0px; "><i class="bi bi-arrow-left"></i>
              Tillbaka</router-link>
            <AddToCartButton class="custombtn" :id="productData.id" />
          </div>
        </div>
      </div>
    </div>
    <hr style="width: 100%; margin-top: 3rem;">
    </hr>
    <div class="similiar_products">
      <h3 style="margin-left: 0.7rem;">Liknande varor </h3>

      <ul class="product_list" v-if="similiarData">
        <li v-for="items in similiarData">
          <ProductCard :productid="items.id" />
        </li>
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
  <div style="width: 100%; height: 100%; display:flex; justify-content:center; align-items: center;" v-else>
    <div class="loading-spinner-container">
      <div class="loading-spinner">
        <div></div>
      </div>
    </div>
  </div>
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

.product_container {
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #dfd3c3;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  object-fit: cover;
  object-position: center;
}

section {
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  margin: auto;
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
}

.product_info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.img-list {
  width: 10rem;
  height: 10rem;
}


.product-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  padding-top: 0.2rem;
  justify-content: flex-start;
}

.product-container p {
  margin: 0;
}

.product_container {
  margin-top: 1.5rem;
}

.product_navigation {
  display: flex;
  flex-direction: row;
  font-size: 1.1rem;
  justify-content: space-between;
}

.product_list {
  justify-content: center;
  row-gap: 3rem;
}

.product_list li {
  max-width: none !important;
  width: calc(25% - 1rem);
}

.similiar_products {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.similiar_products h3 {
  margin-left: 0.7rem;
}

.custombtn {
  background-color: var(--dusty-pink);
  padding-left: 1rem;
  padding-right: 1rem;
}

.searchbar {
  width: 50%;
  margin: auto;
}

@media screen and (max-width: 700px) {
  .product_list {
    justify-content: center !important;
  }

  .searchbar {
    width: 100% !important;
  }
}

@media screen and (min-width: 700px) {
  .product_information {
    flex-direction: row;
  }

  .product-container {
    padding-top: 1rem;
    justify-content: space-between;
  }

  .img-wrapper {
    width: 70%;
  }

  .img-wrapper img {
    border-top-left-radius: 19px;
    border-bottom-left-radius: 19px;
    border-top-right-radius: 0px;
  }

  .title-bold {
    font-size: 2rem;
  }

  .similiar_products h3 {
    margin-left: 0rem;
  }

}

@media screen and (max-width: 830px) {
  section {
    width: 90%;
  }
}

@media screen and (min-width: 1px) and (max-width: 700px) {
  .product_list {
    justify-content: center !important;
  }

  .product_list li {
    width: calc(50% - 1rem);
  }
}

@media screen and (min-width: 1100px) {
  .product_list li {
    width: calc(25% - 1rem);
  }
}

/* @media screen and (min-width: 1px) and (max-width: 600px) {
  .product_list li {
    width: calc(50% - 1rem);
  }
}

@media screen and (min-width: 600px) and (max-width: 820px) {
  .product_list li {
    width: calc(33.33% - 1rem);
  }
}

@media screen and (min-width: 820px) and (max-width: 1150px) {
  .product_list li {
    width: calc(20% - 1rem);
  }
}

@media screen and (min-width: 1150px) {
  .product_list li {
    width: calc(14.28% - 1rem);
  }
}

@media screen and (min-width: 128rem) {
  .product_list li {
    width: calc(12.5% - 1rem);
  }
} */
</style>
