<script>
import AddToCartButton from '../components/AddToCartButton.vue';
import SearchBar from '../components/SearchBar.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  data() {
    return {
      isLoading: true,
      productData: null,
      filterType: null,
      filterCategories: [
        { value: null, text: 'Sortera' },
        { value: 'name', text: 'Namn' },
        { value: 'low_to_high', text: 'Pris lågt till högt' },
        { value: 'high_to_low', text: 'Pris högt till lågt' },
      ]
    }
  },
  async created() {
    await this.getSearchItems(this.$route.params.query, this.filterType);
    this.isLoading = false;
  },
  watch: {
    async filterType(newFilter) {
      this.isLoading = true;
      this.productData = [];
      this.filterType = newFilter;
      await this.getSearchItems(this.$route.params.query, this.filterType);
      this.isLoading = false;
    },
    async '$route.params.query'(newRoute) {
      await this.getSearchItems(newRoute, this.filterType);
    }
  },
  methods: {
    async getSearchItems(query, filtertype) {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();
        let matchingProducts;
        let lowercaseQuery = query.toLowerCase();
        switch (filtertype) {
          case null:
            matchingProducts = data.products.filter(item => item.product_name.toLowerCase().includes(lowercaseQuery));
            break;
          case 'name':
            matchingProducts = data.products.filter(item => item.product_name.toLowerCase().includes(lowercaseQuery))
              .sort((a, b) => a.product_name.localeCompare(b.product_name, 'sv'));
            break;
          case 'low_to_high':
            matchingProducts = data.products.filter(item => item.product_name.toLowerCase().includes(lowercaseQuery))
              .sort((a, b) => a.price - b.price);
            break;
          case 'high_to_low':
            matchingProducts = data.products.filter(item => item.product_name.toLowerCase().includes(lowercaseQuery))
              .sort((a, b) => b.price - a.price);
            break;
        }

        if (matchingProducts.length > 0) {

          this.productData = matchingProducts;

        } else {
          this.productData = 0;
        }

      } catch {
        this.productData = 0;
      }
    }
  },
  components: {
    AddToCartButton,
    SearchBar,
    ProductCard
  },
}
</script>

<template>
  <nav style="padding: 1rem;">
    <ul class="bread-crumb-meny">
      <li><router-link to="/">Hem</router-link> <i class="bi bi-chevron-right"></i></li>
      <li>Sök<i class="bi bi-chevron-right"></i></li>
      <li><router-link :to="'/search/' + this.$route.params.query"><b>{{ this.$route.params.query }}</b></router-link>
      </li>
    </ul>
  </nav>
  <section>
    <SearchBar style="margin: auto; width: 100%; margin-bottom: 1rem;" />
    <div class="top_of_search" v-if="productData !== 0">
      <h2>Sökresultat för "{{ this.$route.params.query }}"</h2>
      <select v-model="filterType" class="filter_type">
        <option v-for="category in filterCategories" :value="category.value">
          {{ category.text }}
        </option>
      </select>
    </div>
    <transition name="fade" mode="out-in">
      <div class="loading-spinner-container" v-if="isLoading" style="margin: auto;">
        <div class="loading-spinner">
          <div></div>
        </div>
      </div>
      <ul class="product_list" v-else-if="productData && productData.length > 0">
        <li v-for="items in productData">
          <ProductCard :productid="items.id" />
        </li>
      </ul>
      <div class="loading-items" v-else>
        <div v-if="productData === 0">
          <h2>Vi kunde inte hitta några resultat, vänligen försök igen</h2>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

section {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 1rem;
}

.loading-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  padding: 1rem 0rem 1rem 0rem;
}

.filter_type {
  outline: none;
  border: 0;
  height: 45px;
  border: 2px solid #9A876F;
  background-color: transparent;
}

.filter_type:hover {
  cursor: pointer;
}

.top_of_search {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  padding-bottom: 1rem;
}

.product_list {
  gap: 1.5rem;
  row-gap: 3.5rem;
}

.product_list li {
  max-width: none !important;
  width: calc(33.33% - 1rem);
}


@media screen and (max-width: 830px) {
  section {
    width: 90%;
  }
}

@media screen and (min-width: 1px) and (max-width: 551px) {
  .product_list {
    row-gap: 1rem;
    justify-content: center !important;
  }

  .product_list li {
    width: calc(50% - 1.5rem);
  }
}

@media screen and (min-width: 1100px) {
  .product_list li {
    width: calc(25% - 1.5rem);
  }
}
</style>
