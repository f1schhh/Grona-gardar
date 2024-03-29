<script>
import SearchBar from '../components/SearchBar.vue';
import FavoriteButton from '../components/FavoriteButton.vue';
import ProductCard from '../components/ProductCard.vue';


export default {
  components: {
    SearchBar,
    FavoriteButton,
    ProductCard,
  },

  data() {
    return {
      productData: null,
    };
  },

  async created() {
    await this.getProducts();
  },

  methods: {
    async getProducts() {
      try {
        const response = await fetch('/src/database.json');
        const data = await response.json()
        const product = data.products.filter(item => item.season === 'autumn');

        if (product) {
          this.productData = product
        } else {
          this.$router.push('/error');
        }


      } catch {
        console.log('There seems to be a problem: ', error);
      }
    },

    goToProducts() {
      this.$router.push('/products')
    },

    goToSeason() {
      this.$router.push('/products/season')
    }

  },

}
</script>


<template>
  <article>

    <!-- ======================================================
     ===========================TOP============================
     ==========================================================  -->
    <section class="home_top">
      <SearchBar class="search_style"></SearchBar>
      <div class="home_top_block">
        <div class="home_top_space">
          <h2>
            Nyskördat efter säsong
          </h2>
          <p>
            Vi erbjuder ett brett sortiment av färska och närproducerade livsmedel, allt från grönsaker till frukt.
            Varje
            produkt är noggrant utvald, odlad med kärlek och omsorg på våra egna marker.
          </p>
          <router-link to="/products">
            <div class="div_button_more_products button_space">
              <button class="button_more_products" @click="goToProducts">
                Våra produkter
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </section>



    <!-- ======================================================
     ==========================SEASON==========================
     ==========================================================  -->
    <section class="section_season">
      <div style="margin: auto;">
        <h3>I säsong</h3>
        <div>
          <ul class="product_list">
            <li v-for="product in productData">
              <ProductCard :productid="product.id" />
            </li>

          </ul>
          <div class="div_button_more_products">
            <button class="button_more_products button_color" @click="goToSeason">Mer i säsong<i
                class="bi bi-arrow-right"></i></button>
          </div>

        </div>
      </div>
    </section>


    <!-- ======================================================
     ==========================ABOUT===========================
     ==========================================================  -->
    <section class="section_about">
      <div class="block_about">
        <img src="../assets/media/Couple_In_Field.jpg" alt="" class="about_img about_img_div">

        <div class="about_text">

          <h3>
            Om oss
          </h3>

          <div>
            Vi tror på hållbarhet och miljövänliga metoder. Genom att köpa från oss stödjer du lokal odling och minskar
            din
            klimatpåverkan. Vi strävar efter att främja en naturlig och ekologisk produktion.
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================
     ==========================CATEGORY========================
     ==========================================================  -->
    <section>
      <div class="block_category">
        <h3>Kategorier</h3>
        <div class="block_space">
        <ul class="category_flex">
          <li>
            <router-link :to="{ path: `/products/vegetables` }">
              <div class="specific_product category_box specific_product_big">
                <div class="img-wrapper img-wrapper_big">
                  <img src="../assets/media/ArtichokeScale.jpg" alt="">
                </div>
                <div class="category_text">
                  <div class="h3_and_heart">
                    <h4>Grönsaker</h4>
                  </div>
                  <p class="p_category">
                    Varje grönsak är omsorgsfullt odlad med hållbara metoder för att
                    säkerställa hög kvalitet inom både smak och näring.
                  </p>
                </div>
              </div>
            </router-link>
          </li>

          <li>
            <router-link :to="{ path: `/products/fruits` }">
              <div class="specific_product category_box specific_product_big">
                <div class="img-wrapper img-wrapper_big">
                  <img src="../assets/media/AppleOnBranch.jpg" alt="">
                </div>
                <div class="category_text">
                  <div class="h3_and_heart">
                    <h4>Frukt</h4>
                  </div>
                  <p class="p_category">
                    Handplockade frukter från våra trädgårdar där varje frukt är
                    odlad med kärlek och omsorg.
                  </p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>

        <div class="div_button_more_products">
          <button class="button_more_products button_color" @click="goToProducts">
            Våra produkter<i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
      </div>
    </section>

    <!-- ======================================================
     =======================ENVIRONMENT========================
     ==========================================================  -->
    <section class="section_environment">
      <div class="block_environment">
        <div class="environment_img_div">
          <img src="../assets/media/pexels-anna-shvets-5231085.jpg" alt="" class="img_environment">
        </div>
        <div class="text_environment">
          <h3>
            Vårt hållbarhets- och miljöarbete
          </h3>
          <p class="p_environment">
            Välkommen till vår ekologiska gård, där natur och hållbarhet står i fokus.
            Genom ekologisk odling och avståndstagande från kemiska ämnen skapar vi en
            miljö där jorden flödar av liv.
          </p>
        </div>
      </div>
    </section>

    <!-- ======================================================
     ==========================REVIEW==========================
     ==========================================================  -->
    <section class="main_review">
      <h3>
        Kundrecensioner
      </h3>
      <div class="review_flex">
        <div class="block_review">
          <div>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p class="main_review_text">
            Sortimentet är imponerande och jag har upptäckt nya favoriter sedan jag
            började handla här. Äpplena är krispiga, morötterna är saftiga och smakar
            precis som de borde. Det är som att få leverans direkt från trädgården!
          </p>
          <p class="review_signature">
            Nour
          </p>
        </div>

        <div class="block_review show_hide_one">
          <div>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p class="main_review_text">
            Gröna Gårdar har verkligen revolutionerat min matupplevelse. Jag älskar att varje
            tugga jag tar är full av naturlig, lokal kärlek och omsorg. Det finns inget bättre än att stödja hållbara
            metoder och njuta av fantastisk smak samtidigt!
          </p>
          <p class="review_signature">
            Johan
          </p>
        </div>

        <div class="block_review show_hide_two">
          <div>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p class="main_review_text">
            Gröna Gårdar har gjort mig till en trogen kund med sin otroliga kvalitet och smakupplevelse. Varje produkt
            är
            som en smakresa genom naturens underverk och jag kan inte få nog av deras fantastiska utbud som varierar med
            säsongerna!
          </p>
          <p class="review_signature">
            Rebecka
          </p>
        </div>

      </div>

    </section>

  </article>
</template>

<style scoped>
article {
  background-color: var(--dark-beige);
  position: relative;
}

.search_style {
  margin-top: 40px;
}

/*  ==========================================================
     ===========================TOP============================
     ==========================================================   */

.home_top {
  /* background-image: url("../assets/media/pexels-karolina-grabowska-4750274.jpg"); */
  /* background-image: url("../assets/media/pexels-gustavo-fring-4894638.jpg"); */
  background-image: url("../assets/media/pexels-karolina-grabowska-4750271.jpg");

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search_style {
  width: 80%;
  max-width: 500px !important;
}

.home_top_block {
  background-color: var(--light-beige-opacity);
  border-radius: 19px;
  width: 80%;
  max-width: 500px !important;
  display: flex;
  flex-direction: column;
  margin-top: 6%;
  padding: 1rem 1rem;
}

.home_top_space {
  max-width: 776px;
  margin: auto;
}

.home_top_block h2 {
  padding-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

.home_top_block p {
  color: black;
}

.div_button_more_products {
  display: flex;
  justify-content: flex-end;
}

.button_more_products {
  background-color: transparent;
  border: 1px solid var(--dark-green);
  font-size: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.button_more_products:active {
  box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.button_space {
  padding-top: 2rem;
}




/*  ==========================================================
     ========================SEASON============================
     ==========================================================   */

.section_season {
  background-color: var(--dark-beige);
  padding:4rem 6%;
  display: flex;
  margin: auto;
}

.section_season h3 {
  padding-bottom: 1rem;
}

.specific_product {
  background-color: var(--light-beige);
}

.product_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
  padding: 1rem;
  max-width: 9.5rem;
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

.text_type {
  font-size: small;
}

.button_color {
  background-color: var(--light-beige);
}

/* .product-card .add-to-cart-button button{
  border: 5px solid var(--dark-green);
  font-size: 1rem;
} */


/*  ==========================================================
     ========================ABOUT=============================
     ==========================================================   */

.section_about {
  background-color: var(--dark-green);
  display: flex;
  flex-direction: column;
  padding: 0;
}

.block_about {
  color: var(--light-beige);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.block_about h3 {
  padding-bottom: 1rem;
}

.about_text {
  padding: 0 6%;
  margin: 3rem 0;
}

.about_img {
  width: 100%;
  height: auto;
}

/*  ==========================================================
     =======================CATEGORY==========================
     ==========================================================   */


.block_category {
  margin: 4rem 6%;
  display: flex;
  flex-direction: column;
}

.category_flex {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: stretch;
  padding-bottom: 1rem;
  justify-content: center;
}

.category_flex li{
  background-color: var(--light-beige);
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 496px;
  border-radius: 19px;
  transition: 1s;
}

.category_flex li:hover{
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.85);
  transition: 0.35s;
}

.category_flex li:focus{
  box-shadow: 1px 0px 15px 0px rgba(0, 0, 0, 0.85);
  transition: 0.6s;
}

.block_category h3 {
  padding-bottom: 1rem;
}

.specific_product{
  box-shadow: none;
}

.img-wrapper {
  height: 100%;
  max-height: 14rem;
  max-width: 100%;
  text-align: center;
  }

.img-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 19px 19px 0 0;
  display: inline-block;
  vertical-align: center;
  object-fit: cover;
}

.category_text h4{
  padding: 1rem;
}

.p_category {
  padding: 0 1rem 2rem 1rem;
}



/*  ==========================================================
     =====================ENVIRONMENT=========================
     ==========================================================   */

.section_environment {
  background-color: var(--dark-green);
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

.block_environment {
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--light-beige);
}

.img_environment {
  width: 100%;
  height: auto;
}

.text_environment {
  padding: 0 6%;
  margin: 3rem 0;
  padding: 0 6%;
}

.p_environment {
  padding: 1rem 0;
}

.new_p {
  font-weight: bold;
}


/*  ==========================================================
     ========================REVIEW==========================
     ==========================================================   */

.main_review {
  background: var(--light-beige);
  padding: 4rem 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.review_flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  padding: 0 6%;
}

.block_review {
  background-color: var(--dark-beige);
  padding: 1rem 2rem;
  border-radius: 19px;
  margin-top: 1rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  max-width: 220px;
}

.show_hide_one,
.show_hide_two,
.show_hide_three {
  display: none;
}

.main_review_text {
  padding-top: 1rem;
  color: black;
}

.review_signature {
  padding-top: 1rem;
  font-size: large;
  color: black;
}

.product_list li {
  max-width: none !important;
  width: calc(16.67% - 1rem);
}

.section_season .button_more_products {
  margin-right: 1rem;
  margin-top: 2rem !important;
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


@media screen and (min-width: 370px) {
  .product_list {
    justify-content: flex-start;
  }
}


@media screen and (min-width: 560px) {
  .category_flex {
    justify-content: center;
  }

  .specific_product_big .img-wrapper img {
    border-radius: 19px 19px 0 0;
    width: 100%;
  }

  .category_text {
    display: flex;
    flex-direction: column;
  }

  .home_top_block {
    padding-top: 3rem;
  }
}


@media screen and (min-width:650px) {
  .block_about {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .about_img_div:first-child {
    order: 1;
  }

  .about_img_div {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    margin: 0;
  }

  .about_img {
    object-fit: cover;
    width: 50vw;
    height: 100%;
  }

  .about_text {
    display: flex;
    flex-direction: column;
    margin: 1rem 0rem;
    padding-right: 6%;
    padding-left: 6% !important;

  }

  .section_environment {
    padding-top: 0;
    display: flex;
    flex-direction: row;
  }

  .block_environment {
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: var(--light-beige);
  }

  .environment_img_div {
    display: flex;
    align-items: center;
  }

  .img_environment {
    object-fit: cover;
    width: 50vw;
    height: auto;
  }

  .text_environment {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding-right: 6% !important;
  }

  .show_hide_one {
    display: flex;
    flex-wrap: wrap;
  }
}


@media screen and (min-width: 970px) {
  .show_hide_two {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 220px;
  }
}


@media screen and (min-width: 1074px) {
  .show_hide_three {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 220px;
  }
}


@media screen and (min-width:1172px) {
  .category_flex{
    justify-content: space-between;
    max-width: 1127px;
    margin: auto
  }

  .block_space{
  padding: 2rem 6% 0 6%
  }
}


@media screen and (max-width: 1224px) {
  .product_list li {
    width: calc(33.33% - 1rem);
  }
}

@media screen and (min-width: 1px) and (max-width: 551px) {
  .product_list {
    row-gap: 1rem;
    justify-content: center !important;
  }

  .product_list li {
    width: calc(50% - 1rem);
  }

  .section_season .button_more_products {
    margin-right: 0.4rem;
  }
}

/* @media screen and (min-width: 1100px) {
  .product_list li {
    width: calc(25% - 1rem);
  }
} */
</style>
