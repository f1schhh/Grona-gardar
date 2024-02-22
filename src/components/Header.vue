<template>
  <header id="header">
    <div @click="exitMenu" class="overlay"></div>
    <div @click="exitCart" class="overlay-for-cart"></div>
    <!--Login div-->
    <div @click="exitLogin" class="overlay-for-login"></div>

    <!--Hamburger Menu Div-->
    <div class="menu-container">
      <ul>
        <li @click="onMenuClick"><router-link to="/">Hem</router-link></li>
        <li @click="onMenuClick"><router-link to="/account">Min Profil</router-link></li>
        <li @click="onMenuClick"><router-link to="/products">Produkter</router-link></li>
        <li @click="onMenuClick"><a href="#about">Om oss</a></li>
        <li @click="onMenuClick"><router-link to="/">Kontakt</router-link></li>
      </ul>
    </div>
    <div class="login-field-to-center-container">
      <div class="login-menu-container">
        <Login></Login>
      </div>
    </div>

    <!--==== Cart conent Container ====-->
    <Cart></Cart>
    <!--End of Cart Content COntainer-->

    <nav id="navBar">
      <div class="hamburger-and-links-container">
        <div class="hamburger-wrapper" @click="onMenuClick()">
          <!-- <i class="bi bi-list kajsa"></i> -->
          <div class="rectA"></div>
          <div class="rectB"></div>
          <div class="rectC"></div>
        </div>
        <div class="links-wrapper">
          <p><router-link to="/products">Produkter</router-link></p>
          <p><a href="#about">Om oss</a></p>
          <p><router-link to="/">Kontakt</router-link></p>
        </div>
      </div>

      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logo/logo.svg" alt="Logo">
        </router-link>
      </div>

      <div class="login-and-cart-container">

        <div class="login-and-cart-icons-wrapper">
          <div @click="onLoginClick" class="login-wrapper">
            <i class="bi bi-person"></i>
          </div>

          <div @click="onCartClick" class="cart-icon-wrapper">
            <i class="bi bi-cart"></i>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import Login from './Login.vue';
import Cart from './Cart.vue'

export default {
  components: {
    Login,
    Cart,
  },
  data() {
    return {

    }
  },
  methods: {

    //Method that expands menu and manipulates the hamburger
    onMenuClick() {
      const header = document.getElementById("header");
      const overlay = document.querySelector(".overlay");
      const rectA = document.querySelector(".rectA")
      const rectB = document.querySelector('.rectB')
      const rectC = document.querySelector('.rectC')

      const menuContainer = document.querySelector('.menu-container')

      if (rectA.classList.contains('move-rectA-down')) {

        overlay.classList.remove("increase-blur")

        //Remove overlay styles once transition has finished
        setTimeout(function () {
          overlay.style.display = "none";
        }, 500)

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

        //Show overlay
        overlay.style.display = "block";

        //Add blur to overlay div
        setTimeout(function () {
          overlay.classList.add("increase-blur")
        }, 100)

        //Set transition values
        rectA.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';
        rectB.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';
        rectC.style.transition = 'top 0.5s, transform 0.5s 0.5s ease-in-out';

        //Add classes to animate rectA,B and C
        rectA.classList.add("move-rectA-down")
        rectC.classList.add('move-rectC-up')
        rectA.classList.add('rotate-rectA-rectB')
        rectB.classList.add('rotate-rectA-rectB')
        rectC.classList.add('rotate-rectC')

        menuContainer.classList.add('move-menu-right')

      }

    },
    //Method that exist menu when user closes menu
    exitMenu() {
      document.querySelector(".menu-container").classList.remove("move-menu-right");
      document.querySelector(".overlay").classList.remove("increase-blur");
      this.onMenuClick();

    },
    // Method that opens the login and blurres background
    onLoginClick() {
      const overlay = document.querySelector(".overlay-for-login")
      const loginContainer = document.querySelector(".login-menu-container ")
      const login = document.querySelector("Login")
      loginContainer.classList.remove('fade-out')

      loginContainer.style.display = "flex"
      overlay.style.display = "flex"

      setTimeout(function () {
        overlay.classList.add("increase-blur-when-using-login")
        loginContainer.classList.add('fade-in');
      }, 100)

    },
    //Method for exiting login page
    exitLogin() {

      const overlay = document.querySelector(".overlay-for-login")
      const loginContainer = document.querySelector(".login-menu-container ")

      //Transition opacity to make div transparent
      overlay.classList.remove("increase-blur-when-using-login")
      loginContainer.classList.add('fade-out')

      setTimeout(function () {

        overlay.style.display = "none";
        popupLogin.style.display = "none";

      }, 500)

    },
    //Method regulating what happens when cart icon is clicked
    onCartClick() {
      //Select elements from DOM
      const cartContentContainer = document.querySelector(".cart-content-container")
      const overlay = document.querySelector(".overlay-for-cart")

      //make cart content wrapper visible for user
      cartContentContainer.classList.add("move-cart-content-container")

      //Show overlay
      overlay.style.display = "block";

      //Transition overlay opacity
      setTimeout(function () {
        overlay.classList.add("increase-blur-when-using-cart")
      }, 100)


    },

    //method for exiting cart
    exitCart() {
      //Select elements from DOM
      const cartContentContainer = document.querySelector(".cart-content-container");
      const overlay = document.querySelector(".overlay-for-cart");

      //Make cart content dissapear to the right
      cartContentContainer.classList.remove("move-cart-content-container")

      //Transition opacity to make div transparent
      overlay.classList.remove("increase-blur-when-using-cart")

      //Remove overlay styles once transition has finished
      setTimeout(function () {
        overlay.style.display = "none";
      }, 500)
    }


  }

}


</script>


<style scoped>
header {
  width: 100vw;
  background-color: var(--dark-beige);
  overflow: hidden;
}

.overlay {
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  transition: background-color 0.75s, backdrop-filter 0.75s;
}

.increase-blur {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

.overlay-for-cart {
  display: none;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  transition: background-color 0.75s, backdrop-filter 0.75s;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3;
}

.increase-blur-when-using-cart {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

.overlay-for-login {
  display: none;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  transition: background-color 0.75s, backdrop-filter 0.75s;
  width: 100%;
  height: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  justify-content: center;
  align-content: center;
}

.increase-blur-when-using-login {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}

nav {
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 25px;
}

.hamburger-and-links-container {
  width: fit-content;
  height: fit-content;
  display: flex;
}

.hamburger-wrapper {
  width: 25px;
  cursor: pointer;
  height: 14px;
  position: relative;
  z-index: 2;
}

.links-wrapper {
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  gap: 25px;
  display: none;

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
  cursor: pointer;
  text-align: center;
  padding: 5px 0;
}

.logo-container img {
  width: 110px;
}

.login-and-cart-container {
  width: 25px;
}

.login-and-cart-icons-wrapper {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.bi {
  font-size: 25px;
  cursor: pointer;
}

main {
  display: flex;
  flex-direction: column;
}

.menu-container {
  background-color: var(--mid-beige);
  width: 280px;
  height: 100vh;
  z-index: 1;
  position: fixed;
  left: -300px;
  transition: left 0.75s ease-in-out;
  box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.4);
}

/* =========================== */
/* ======= Log in page ======= */
/* =========================== */
.login-menu-container {
  display: none;
  background-color: var(--mid-beige);

  width: 60vw;
  padding: 10px;
  height: fit-content;
  border-radius: 16px;
  z-index: 5;
  box-shadow: -8px 0px 12px 0px rgba(0, 0, 0, 0.4);
  align-self: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  animation: fade-out 0.5s ease-in-out forwards;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }

}

/* Hamburger */
.move-menu-right {
  left: 0;
}

ul {
  margin-top: 60px;
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


/*===================*/
@media screen and (min-width: 451px) {

  .login-register-link-wrapper h1 {

    font-size: 20px;
  }

}

@media screen and (min-width: 700px) {
  .logo-container {
    order: 1;
    justify-content: start;
  }

  .hamburger-and-links-container {
    order: 2;
    flex-grow: 1;
  }

  .login-and-cart-container {
    width: 25px;
    order: 2;
  }

  .hamburger-wrapper {
    visibility: hidden;
  }

  .links-wrapper {
    display: flex;
  }

  .login-wrapper {
    visibility: visible;
  }

}
</style>
