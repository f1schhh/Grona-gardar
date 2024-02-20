<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  data() {
    return {
      categoriData: null,
    }
  },
  methods: {

  },
  components: {
    SearchBar
  },
}
</script>

<template>
  <section class="container">
    <!-- <SearchBar></SearchBar> -->
    <ul class="filter_categories">
      <li class="active"><router-link to="/">Alla</router-link></li>
      <li><router-link to="/">Frukter</router-link></li>
      <li><router-link to="/products">Grönsaker</router-link></li>
      <li><router-link to="/">I säsong</router-link>
      </li>
    </ul>
    <section>
      <h2 style="padding: 0.3rem;">Frukt</h2>
      <ul class="product_list">
        <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img src="../assets/media/product_images/Apple_Aroma.jpg" alt="">
            </div>
            <div class="h3_and_heart">
              <h3>Äpple Alice</h3>
              <div class="button_like">
                <i class="bi bi-heart"></i>
              </div>
            </div>

            <button class="button_cart">Lägg i varukorg</button>
          </div>
        </li>
      </ul>
      <div class="div_button_more_products">
        <button class="button_more_products">Mer Frukter <i class="bi bi-arrow-right"></i></button>
      </div>
    </section>

  </section>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}

.filter_categories {
  display: flex;
  flex-direction: row;
  gap: 1rem;
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

div {
  display: flex;
  justify-content: center;
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

.h3_and_heart {
  display: flex;
  justify-content: space-between;
}

h3 {
  color: black;
  font-weight: 700;
  /* justify-content: left;
    align-items: left; */
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
