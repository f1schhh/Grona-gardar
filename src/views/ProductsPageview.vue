<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  data() {
    return {
      categoryData: { fruits: [], vegetables: [], season: [] },
    }
  },
  async created() {
    await this.getCategory(this.$route.params.category)
  },
  watch: {
    async "$route.params.category"(newId) {
      await this.getCategory(newId);
    }
  },
  methods: {
    async getCategory(currentroute) {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();
        let findCategory;
        if (currentroute) {
          switch (currentroute) {
            case 'fruits':
              this.categoryData.vegetables = [];
              this.categoryData.season = [];
              findCategory = data.products.filter(item => item.category === "Frukt");
              this.categoryData.fruits = findCategory;
              break;
            case 'vegetables':
              this.categoryData.fruits = [];
              this.categoryData.season = [];
              findCategory = data.products.filter(item => item.category === "Grönsaker");
              this.categoryData.vegetables = findCategory;
              break;
            case 'season':
              this.categoryData.fruits = [];
              this.categoryData.vegetables = [];
              findCategory = data.products.filter(item => item.season === data.active_season);
              this.categoryData.season = findCategory
              break;
          }

        } else {
          this.categoryData.vegetables = [];
          this.categoryData.fruits = [];
          this.categoryData.season = [];

          data.products.forEach(items => {
            switch (items.category) {
              case 'Frukt':
                this.categoryData.fruits.push(items);
                break;
              case 'Grönsaker':
                this.categoryData.vegetables.push(items);
                break;
              case data.active_season:
                this.categoryData.season.push(items);
                break;
            }
            if (items.season === data.active_season) {
              this.categoryData.season.push(items);
            }
          });
        }
      } catch {

      }
    },

    //Method that forwards user to a specific product page
    onProductClick(id) {
      // Use router.push to navigate to page Search
      this.$router.push(`/product/${id}`)
    },

  },
  components: {
    SearchBar
  },
}
</script>

<template>
  <section class="container">
    <nav>
      <ul class="bread-crumb-meny">
        <li><router-link to="/">Hem</router-link> <i class="bi bi-chevron-right"></i></li>
        <li><router-link to="/products" class="active">Produkter</router-link></li>
      </ul>
    </nav>
    <!-- <SearchBar></SearchBar> -->
    <ul class="filter_categories">
      <li :class="{ active: $route.path === '/products' || $route.path === '/products/' }">
        <router-link to="/products">Alla</router-link>
      </li>
      <li :class="{ active: $route.path === '/products/fruits' }">
        <router-link to="/products/fruits">Frukter</router-link>
      </li>
      <li :class="{ active: $route.path === '/products/vegetables' }">
        <router-link to="/products/vegetables">Grönsaker</router-link>
      </li>
      <li :class="{ active: $route.path === '/products/season' }">
        <router-link to="/products/season">I säsong</router-link>
      </li>
    </ul>
    <div class="category_container">
      <section v-if="categoryData.fruits.length !== 0">
        <h2 style="padding: 0.3rem;">Frukt</h2>
        <ul class="product_list">
          <li v-for="items in categoryData.fruits">
            <div class="specific_product">
              <div class="img-wrapper" @click="onProductClick(items.id)">
                <img :src="items.product_image" :alt="items.product_name">
              </div>
              <div class="h3_and_heart">
                <h3><router-link :to="`/product/${items.id}`" class="router-link-custom">{{ items.product_name
                }}</router-link></h3>
                <div class="button_like">
                  <i class="bi bi-heart"></i>
                </div>
              </div>
              <div style="display:flex; flex-direction: column; gap: 1rem; padding-left: 0.8rem; min-height: 3rem;">
                {{ items.product_type }}
                <span>{{ items.price }} kr/kg</span>
              </div>
              <button class="button_cart">Lägg i varukorg</button>
            </div>
          </li>
        </ul>
      </section>

      <section v-if="categoryData.vegetables.length !== 0">
        <h2 style="padding: 0.3rem;">Grönsaker</h2>
        <ul class="product_list">
          <li v-for="items in categoryData.vegetables">
            <div class="specific_product">
              <div class="img-wrapper" @click="onProductClick(items.id)">
                <img :src="items.product_image" :alt="items.product_name">
              </div>
              <div class="h3_and_heart">
                <h3><router-link :to="`/product/${items.id}`" class="router-link-custom">{{ items.product_name
                }}</router-link></h3>
                <div class="button_like">
                  <i class="bi bi-heart"></i>
                </div>
              </div>
              <button class="button_cart">Lägg i varukorg</button>
            </div>
          </li>
        </ul>
      </section>
      <section v-if="categoryData.season.length !== 0">
        <h2 style="padding: 0.3rem;">I säsong</h2>
        <ul class="product_list">
          <li v-for="items in categoryData.season">
            <div class="specific_product">
              <div class="img-wrapper" @click="onProductClick(items.id)">
                <img :src="items.product_image" :alt="items.product_name">
              </div>
              <div class="h3_and_heart">
                <h3><router-link :to="`/product/${items.id}`" class="router-link-custom">{{ items.product_name
                }}</router-link></h3>
                <div class="button_like">
                  <i class="bi bi-heart"></i>
                </div>
              </div>
              <button class="button_cart">Lägg i varukorg</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.2rem;
}

.filter_categories {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.filter_categories li {
  background-color: var(--dark-beige);
  border-radius: 19px;
  padding: 1rem;
}

.filter_categories .active {
  background-color: var(--dusty-pink);
}

.category_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.img-wrapper {
  width: 10.4375rem;
  height: 10.4375rem;
  cursor: pointer;
}

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

.h3_and_heart {
  display: flex;
  justify-content: space-between;
}

h3 {
  color: black;
  font-weight: 700;
}



h3,
.button_like,
.button_cart {
  margin: 7px;
}


/* CSS for buttons in general */
button:hover {
  cursor: pointer;
}

/* Knapp för varukorg */


.button_cart {

  clear: both;
  margin-left: auto;
  margin-right: 2;
  background-color: #FFF8EE;
  border: 0;
  text-align: center;
  border-radius: 19px;
  padding: 0.6rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: 5px 10px;

}

.div_button_more_products {
  clear: both;
  display: flex;
  justify-content: flex-end;

}

.button_more_products {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 20px;
  border: 0;
  text-align: center;
  border-radius: 50px;
  padding: 0.3rem 0.8rem;
  padding-left: 1rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--dusty-pink);
}

.button_more_products i {
  font-size: 30px;
  padding-left: 15px;
}

@media screen and (max-width: 385px) {
  li {
    max-width: 9.5rem;
  }

  .img-wrapper {
    width: 9.5rem;
    height: 9.5rem;
  }
}
</style>
