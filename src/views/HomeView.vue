<script setup>
</script>

<template>
  <article>
  <section class="main_top">

      <div class="main_info">
        <h2>
          Färsk Frukt, Närodlad och Hållbar
        </h2>
        <p>
          Vi erbjuder ett brett sortiment av färska och närproducerade livsmedel, allt från grönsaker till frukt. Varje produkt är noggrant utvald, odlad med kärlek och omsorg på våra egna marker.
        </p>
        <div class="div_button_more_products">
          <button class="button_more_products">Våra produkter<i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
</section>

<section>
  <!-- Komponenten "I säsong" som visar två produkter + knapp "Mer i säsong" -->

  <h3>I säsong</h3>
  <!-- <IN_SEASON_COMPONENT></IN_SEASON_COMPONENT> -->
</section>

<section class="section_about_us">
  <h3 class="bright_text">
    Om oss
  </h3>
  <div class="bright_text">
    Vi tror på hållbarhet och miljövänliga metoder. Genom att köpa från oss stödjer du lokal odling och minskar din klimatpåverkan. Vi strävar efter att främja en naturlig och ekologisk produktion.
  </div>
</section>

<section>
  <!-- "Kategorier" som visar två produktbilder (en/component) -> "Grönsaker" och "Frukter" + knapp "Vårt sortiment" (som leder till ProductsPageview) -->

  <h3>Kategorier</h3>
    <ul class="product_list">
      <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img src="../assets/media/Artichoke.jpg" alt="">
            </div>
            <div class="h3_and_heart">
              <h3>Grönsaker</h3>
            </div>
            <div>
                Vi erbjuder ett stort utbud av ekologiska grödor direkt från vår gård till din tallrik. Varje grönsak är omsorgsfullt odlad med hållbara metoder för att säkerställa både smakrikedom och näringsrik kvalitet.
              </div>
          </div>
        </li>

        <li>
          <div class="specific_product">
            <div class="img-wrapper">
              <img src="../assets/media/product_images/Pumpkin_Howden.jpg" alt="">
            </div>
            <div>
              <h3>Frukt</h3>
              <div>
                En härlig samling ekologiska frukter, handplockade från våra trädgårdar där varje frukt är odlad med kärlek och omsorg.
              </div>
            </div>
          </div>
        </li>
      </ul>
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
section {
  padding: 1rem 0;
}
.main_top {
  background-image: url("../assets/media/GreenHouse.jpg");
  background-size: cover;
  background-color: var(--dark-beige);
}
.main_info {
  background-color: var(--light-beige-opacity);
  padding: 1rem;
  border-radius: 19px;
  width: 70%;
  margin: auto;
}
.div_button_more_products {
padding-left: 46px;
}
.section_about_us {
  background-color: var(--dark-green);
}

.specific_product {
  background-color: var(--light-beige);
}
.bright_text {
  color: var(--light-beige);
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
