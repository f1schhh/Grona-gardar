<script>
import SearchBar from '../components/SearchBar.vue';

export default {
  components: {
    SearchBar,
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
        const product = data.products.filter(item => item.season === 'summer');
        console.log(product)

        if (product) {
          this.productData = product
        } else {
          this.$router.push('/error');
        }


      } catch {
        console.log('Whoops')
      }
    },

    goToProducts() {
      this.$router.push('/products')
    }
  },

}
</script>

<template>
  <article>
    <section class="main_top">
      <SearchBar></SearchBar>
      <div class="block_info">
        <h2>
          Färsk Frukt, Närodlad och Hållbar
        </h2>
        <p class="main_info_text">
          Vi erbjuder ett brett sortiment av färska och närproducerade livsmedel, allt från grönsaker till frukt. Varje
          produkt är noggrant utvald, odlad med kärlek och omsorg på våra egna marker.
        </p>
        <div class="div_button_more_products">
          <button class="button_more_products" @click="goToProducts">Våra produkter<i
              class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </section>

    <section class="section_season">
      <div>
        <h3>I säsong</h3>
        <div>
          <ul class="product_list list_season">
            <li v-for="product in productData">
              <router-link :to="{ path: `/product/${product.id}` }">
                <div class="specific_product" >
                  <div class="img-wrapper">
                      <img :src="product.product_image" alt="">
                    </div>
                  <div class="product_information">
                    <div class="product-text">
                      <span class="title-bold">{{ product.product_name }}</span>
                      <span>{{ product.description_title }}</span>
                      <span>{{ product.price }}kr/kg</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </li>

          </ul>
          <div class="div_button_more_products">
          <button class="button_more_products" @click="goToProducts">Våra produkter<i
              class="bi bi-arrow-right"></i></button>
        </div>

        </div>
      </div>
    </section>

    <section class="section_about">
      <div class="block_about">
        <h3>
          Om oss
        </h3>
        <div>
          Vi tror på hållbarhet och miljövänliga metoder. Genom att köpa från oss stödjer du lokal odling och minskar din
          klimatpåverkan. Vi strävar efter att främja en naturlig och ekologisk produktion.
        </div>
      </div>
    </section>

    <section>
      <div class="block_category">
        <h3>Kategorier</h3>
        <ul class="product_list">
          <li>
            <div class="specific_product category_box">
              <div class="img-wrapper">
                <img src="../assets/media/Artichoke.jpg" alt="">
              </div>
              <div class="h3_and_heart">
                <h4>Grönsaker</h4>
              </div>
              <p class="p_category">
                Varje grönsak är omsorgsfullt odlad med hållbara metoder för att
                säkerställa hög kvalitet inom både smak och näring.
              </p>
            </div>
          </li>

          <li>
            <div class="specific_product category_box">
              <div class="img-wrapper">
                <img src="../assets/media/Flowers.jpg" alt="">
              </div>
              <div class="h3_and_heart">
                <h4>Frukt</h4>
              </div>
              <p class="p_category">
                Handplockade frukter från våra trädgårdar där varje frukt är
                odlad med kärlek och omsorg.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section_environment">
      <div class="block_environment">
        <div>
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
          <p class="p_environment">
            <span class="new_p">Kretsloppsanpassning</span> är kärnan i vårt arbete
            -genom kompostering till återvinning minimerar vi vårt avfall och bidrar
            till ett hållbart användande av våra resurser. Energiförbrukningen optimeras
            genom investeringar i effektiva system och vi prioriterar vattenbevarande
            metoder för att minska påverkan på miljön.
          </p>
          <p class="p_environment">
            <span class="new_p">Lokala</span> samarbeten är centralt för oss för att
            minska vårt koldioxidavtryck. Vi är inte bara odlare; vi är förkämpar för
            medvetenhet och utbildning. Genom att dela med oss av vår kunskap om
            ekologisk odling hoppas vi kunna inspirera andra till att välja en mer
            hållbar livsstil. Vår gård är en plats där varje gröda är en handling av
            kärlek till planeten och varje skörd är ett framsteg mot en grönare framtid.
          </p>
        </div>
      </div>
    </section>

    <section class="main_review">
      <h3>
        Kundrecensioner
      </h3>
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
          Anna-Karin
        </p>
      </div>
    </section>

  </article>
</template>

<style scoped>
article {
  background-color: var(--dark-beige);
}

section {
  padding: 1rem 0;
}

.main_top {
  background-image: url("../assets/media/GreenHouse.jpg");
  background-size: cover;
}

.block_info {
  background-color: var(--light-beige-opacity);
  padding: 1rem;
  border-radius: 19px;
  width: 80%;
  margin: 4rem auto 3rem auto;
  overflow: auto;
}

.main_info_text {
  color: black;
}

.div_button_more_products {
  float: right;
}

.button_more_products {
  background-color: transparent;
  border: 1px solid var(--dark-green);
  font-size: 15px;
}

.section_season {
  background-color: var(--dark-beige);
  padding: 2rem 1rem 1rem 1rem;
  max-height: 25rem;
}

.list_season{
/* flex-wrap: nowrap; */
flex-direction: row;
}
.specific_product {
  background-color: var(--light-beige);
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
  padding: 2rem;
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

.section_about {
  background-color: var(--dark-green);
}

.block_about {
  padding: 1rem;
  color: var(--light-beige);
}

.block_about h3 {
  padding-bottom: 1rem;
}

.block_category {
  padding: 1rem;
}

.block_category h3 {
  padding-bottom: 1rem;
}

.category_box {
  background-color: var(--light-beige);
  height: 22rem;
}

.img-wrapper {
  width: 10.4375rem;
  height: 10.4375rem;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 19px 19px 0 0;
  object-fit: cover;
  object-position: center;
}

.p_category {
  padding: 0 1rem 0.3rem 0.3rem;
}

.section_environment {
  background-color: var(--dark-green);
  padding-top: 0;
}

.block_environment {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--light-beige);
}

.img_environment {
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
}

.text_environment {
  padding: 1rem;
}

.p_environment {
  padding: 1rem 0;
}

.new_p {
  font-weight: bold;
}

.main_review {
  background: var(--light-beige);
  padding: 2rem 1rem;
}

.block_review {
  background-color: var(--dark-beige);
  padding: 1rem;
  border-radius: 19px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 3rem;
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
