<script>
export default {
  created() {
    this.getProducts(1);
  },
  methods: {
    async getProducts(id) {
      const results = await fetch('database.json');
      const response = await results.json();
      console.log(results)
    }
  }
}
</script>
<template>
  <article id="specific_product">
    <div class="product_information">
      <div class="img-wrapper">
        <img src="../assets/media/Alice_Apple.jpg" alt="">
      </div>
      <div class="product-text">
        <span class="title-bold">Äpple Alice Klass 1</span>
        <span>43kr/kg</span>
      </div>
      <div class="product-text">
        <span class="title-bold">Säsongens Hållbara Skörd </span>
        <p>
          Äpplet Alice är en del av vårt säsongssortiment, vilket inte bara garanterar överlägsen
          smak utan också minimerar behovet av konstgjorda bevaringsmetoder. Vi uppmuntrar våra kunder att njuta av frukt
          och grönsaker när de är i säsong för att stödja hållbara konsumtionsvanor.
        </p>
      </div>

      <div class="product_navigation">
        <div class="go_back"><i class="bi bi-arrow-left"></i> Tillbaka</div>
        <button class="add_to_cart">Lägg i varukorg</button>
      </div>
    </div>
  </article>
</template>
<style scoped>
#specific_product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 19px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: var(--dark-beige);
}

.product_information {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark-green);
  padding: 2rem;
}

.img-wrapper {
  width: 290px;
  height: 221px;
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

.product-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: flex-start;
}

.product-text p {
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
</style>
