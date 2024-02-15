<script>
export default {
  data() {
    return {
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
  },
  watch: {
    async filterType(newFilter, old) {
      this.filterType = newFilter;
      await this.getSearchItems(this.$route.params.query, this.filterType);
    }
  },
  methods: {
    async getSearchItems(query, filtertype) {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json();
        let matchingProducts;
        switch (filtertype) {
          case null:
            matchingProducts = data.products.filter(item => item.product_name.includes(query));
            break;
          case 'name':
            matchingProducts = data.products.filter(item => item.product_name.includes(query))
              .sort((a, b) => a.product_name.localeCompare(b.product_name, 'sv'));
            break;
          case 'low_to_high':
            matchingProducts = data.products.filter(item => item.product_name.includes(query))
              .sort((a, b) => a.price - b.price);
            break;
          case 'high_to_low':
            matchingProducts = data.products.filter(item => item.product_name.includes(query))
              .sort((a, b) => b.price - a.price);
            break;
        }

        if (matchingProducts.length > 0) {

          this.productData = matchingProducts;
        }

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<template>
  <section>
    <div class="top_of_search">
      <h2>Sökresultat för "{{ this.$route.params.query }}"</h2>
      <select v-model="filterType">
        <option v-for="category in filterCategories" :value="category.value" :key="category.value">
          {{ category.text }}
        </option>
      </select>
    </div>
    <ul class="product_list" v-if="productData">
      <router-link :to="'/product/' + items.id" v-for="items in productData" :key="items.id">
        <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img :src="items.product_image" alt="">
            </div>
            <div class="h3_and_heart">
              <h3>{{ items.product_name }}</h3>
              <div class="button_like">
                <i class="bi bi-heart"></i>
              </div>
            </div>
            <div class="price">
              <p>{{ items.price }} kr/kg</p>
            </div>
            <div class="button_container">
              <button class="button_cart">Lägg i varukorg</button>
            </div>
          </div>
        </li>
      </router-link>
    </ul>
  </section>
</template>
<style scoped>
h2 {
  padding: 1rem 0rem 1rem 0rem;
}

.img-wrapper {
  width: 10.4375rem;
  height: 10.4375rem;
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

.top_of_search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.2rem;
  padding-bottom: 1rem;
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
