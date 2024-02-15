<template>
  <header>
    <div class="menu-container">
      <ul>
        <li><router-link to="/">Hem</router-link></li>
        <li><router-link to="/account">Min Profil</router-link></li>
        <li><router-link to="/products">Produkter</router-link></li>
        <li><a href="#about">Om oss</a></li>
      </ul>
    </div>
    <nav>
      <div class="hamburger-container">
        <div class="hamburger-wrapper" @click="onMenuClick()">
          <!-- <i class="bi bi-list kajsa"></i> -->
          <div class="rectA"></div>
          <div class="rectB"></div>
          <div class="rectC"></div>
        </div>
      </div>

      <div class="logo-container">
        <p>GRÖNA GÅRDAR</p>
      </div>

      <div class="login-and-cart-container">

        <div class="login-wrapper">
          <i class="bi bi-person"></i>
        </div>

        <div class="cart-wrapper">
          <i class="bi bi-cart"></i>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data() {

  },
  methods: {
    onMenuClick() {

      const rectA = document.querySelector(".rectA")
      const rectB = document.querySelector('.rectB')
      const rectC = document.querySelector('.rectC')

      const menuContainer = document.querySelector('.menu-container')

      if (rectA.classList.contains('move-rectA-down')) {

        rectA.style.transition = 'top 0.5s 0.5s, transform 0.5s ease-in-out';
        rectB.style.transition = 'top 0.5s 0.5s, transform 0.5s ease-in-out';
        rectC.style.transition = 'top 0.5s 0.5s, transform 0.5s ease-in-out';

        rectA.classList.remove('rotate-rectA-rectB')
        rectB.classList.remove('rotate-rectA-rectB')
        rectC.classList.remove('rotate-rectC')

        rectA.classList.remove("move-rectA-down")
        rectC.classList.remove('move-rectC-up')

        menuContainer.classList.remove('move-menu-right')
      }
      else {
        rectA.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';
        rectB.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';
        rectC.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';

        rectA.classList.add("move-rectA-down")
        rectC.classList.add('move-rectC-up')
        rectA.classList.add('rotate-rectA-rectB')
        rectB.classList.add('rotate-rectA-rectB')
        rectC.classList.add('rotate-rectC')

        menuContainer.classList.add('move-menu-right')


      }

    }
  }

}

</script>

<style scoped>
nav {
  background-color: var(--dark-beige);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
}

.hamburger-container {
  width: 80px;
}

.hamburger-wrapper {
  width: 25px;
  cursor: pointer;
  height: 14px;
  position: relative;
  z-index: 2;
}

.rectA,
.rectB,
.rectC {
  background-color: var(--dark-green);
  width: 25px;
  height: 1.5px;
  border-radius: 16px;
  transition: top 0.5s, transform 0.5s 0.5s ease-in-out;
}

.rectA {
  top: 0;
  position: absolute;
}

.rectB {
  top: 7px;
  position: absolute;
}

.rectC {
  top: 14px;
  position: absolute;
}

.move-rectA-down {
  top: 7px;
}

.move-rectC-up {
  top: 7px;
}

.rotate-rectA-rectB {
  transform: rotate(45deg);
}

.rotate-rectC {
  transform: rotate(-45deg);
}

.logo-container {
  justify-content: center;
  flex-grow: 1;
  text-align: center;
}

.login-and-cart-container {
  width: 80px;
  display: flex;
  justify-content: space-between;
}

.bi {
  font-size: 25px;
  cursor: pointer;
}

main {
  /* background-color: antiquewhite; */
  display: flex;
  flex-direction: column;
}

.menu-container {
  background-color: var(--mid-beige);
  width: 300px;
  height: 100vh;
  z-index: 1;
  position: fixed;
  left: -300px;
  transition: left 0.75s ease-in-out;
}

.move-menu-right {
  left: 0;
}

ul {
  padding-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

li {
  padding-top: 20px;
  margin-left: 25px;
  font-size: 30px;
}
</style>
