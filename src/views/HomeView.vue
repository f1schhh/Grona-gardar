<script setup>
import SearchBar from '../components/SearchBar.vue';
</script>

<script>
export default {
  components: {
    SearchBar,
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
          Vi erbjuder ett brett sortiment av färska och närproducerade livsmedel, allt från grönsaker till frukt. Varje produkt är noggrant utvald, odlad med kärlek och omsorg på våra egna marker.
        </p>
        <div class="div_button_more_products">
          <button class="button_more_products">Våra produkter<i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
</section>

<section class="section_season">
  <div>
    <h3>I säsong</h3>
    <!-- <IN_SEASON_COMPONENT></IN_SEASON_COMPONENT> -->
  </div>
</section>

<section class="section_about">
  <div class="block_about">
  <h3>
    Om oss
  </h3>
  <div>
    Vi tror på hållbarhet och miljövänliga metoder. Genom att köpa från oss stödjer du lokal odling och minskar din klimatpåverkan. Vi strävar efter att främja en naturlig och ekologisk produktion.
  </div>
  </div>
</section>

<section>
<div class="block_category">
  <h3>Kategorier</h3>
    <ul class="product_list">
      <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img src="../assets/media/Artichoke.jpg" alt="">
            </div>
            <div class="h3_and_heart">
              <h4>Grönsaker</h4>
            </div>
            <p class="p_category">
              Varje grönsak är omsorgsfullt odlad med hållbara metoder för att säkerställa både smakrikedom och näringsrik kvalitet.
            </p>
          </div>
        </li>

        <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img src="../assets/media/Flowers.jpg" alt="">
            </div>
            <div class="h3_and_heart">
              <h4>Frukt</h4>
            </div>
              <p>
                Handplockade från våra trädgårdar där varje frukt är odlad med kärlek och omsorg.
              </p>
            </div>
        </li>
      </ul>
    </div>
</section>


<ul>

<li>
  <div>
    Bild och text om företaget.
  </div>
</li>

<li>
  <div>
    Kundrecensioner som visar en recension.
  </div>
</li>

</ul>
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
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 3rem;
}
.main_info_text {
  color: black;
}
.div_button_more_products {
padding-left: 5rem;
}

.button_more_products {
  background-color: transparent;
  border: 1px solid var(--dark-green);
}
.section_season {
  background-color: var(--dark-beige);
  padding: 1rem;
  padding-top: 2rem;
}
.section_about {
  background-color: var(--dark-green);
}
.block_about{
  padding: 1rem;
}

.block_about {
  color: var(--light-beige);
}
.block_about h3 {
padding-bottom: 1rem;}

.block_category {
  padding: 1rem;
}
.block_category h3 {
  padding-bottom: 1rem;
}
.specific_product {
  background-color: var(--light-beige);
  height: 24rem;
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

.p_category {
  padding: 1rem;
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
