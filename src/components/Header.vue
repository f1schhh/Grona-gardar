<template>
    <header id="header">
        <div @click="exitMenu" class="overlay"></div>
        <div class="login-overlay">
            <div v-bind:class="{ 'login-menu-container': true, 'move-login-menu-left': loginIsClicked }">
                <div class="login-menu-wrapper">
                    <div class="login-register-link-wrapper">
                        <h2>Logga in</h2>
                        <h2>Registrera</h2>
                    </div>
                    <form action="" method="post">
                        <label for="username">E-postadress: </label>
                        <input type="text" required placeholder="E-postadress:">
                        <label for="password">Lösenord: </label>
                        <input type="text" required>
                    </form>
                </div>
            </div>
        </div>
        <div class="menu-container">
            <ul>
                <li @click="onMenuClick"><router-link to="/">Hem</router-link></li>
                <li @click="onMenuClick"><router-link to="/account">Min Profil</router-link></li>
                <li @click="onMenuClick"><router-link to="/products">Produkter</router-link></li>
                <li @click="onMenuClick"><a href="#about">Om oss</a></li>
                <li @click="onMenuClick"><router-link to="/">Kontakt</router-link></li>
            </ul>
        </div>
        <nav id="navBar">
            <div class="hamburger-and-links-container">
                <div class="hamburger-wrapper" @click="onMenuClick()">
                    <!-- <i class="bi bi-list kajsa"></i> -->
                    <div class="rectA"></div>
                    <div class="rectB"></div>
                    <div class="rectC"></div>
                </div>
                <div class="links-wrapper">
                    <p @click="onMenuClick"><router-link to="/products">Produkter</router-link></p>
                    <p @click="onMenuClick"><a href="#about">Om oss</a></p>
                    <p @click="onMenuClick"><router-link to="/">Kontakt</router-link></p>
                </div>
            </div>

            <div class="logo-container">
                <img src="../assets/logo/logo.svg" alt="Logo">
            </div>

            <div class="login-and-cart-container">

                <div class="login-and-cart-wrapper">
                    <div @click="onLoginMenuClick()" class="login-wrapper" >
                        <i class="bi bi-person"></i>
                    </div>

                    <div class="cart-wrapper">
                        <i class="bi bi-cart"></i>
                    </div>
                </div>
            </div>

        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        // isNotLoggedIn: true
        return{
            loginIsClicked: false
        }
    },
    methods: {
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
                overlay.classList.add("increase-blur")

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

        exitMenu() {
            document.querySelector(".menu-container").classList.remove("move-menu-right");
            document.querySelector(".overlay").classList.remove("increase-blur");

            this.onMenuClick();

        },
        onLoginMenuClick(){
            if (loginIsClicked === true){

            }
            this.loginIsClicked = !this.loginIsClicked;



        }
    }

}


</script>



<style scoped>
header {
    width: 100%;
    background-color: var(--dark-beige);
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

nav {
    background-color: var(--dark-beige);
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
    /* background-color: red; */
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
    /* background-color: orange; */
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: row;
    gap: 10px;
    display: none;

}

.links-wrapper p {
    background-color: pink;

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
    text-align: center;
    padding: 5px 0;
}

.logo-container img {
    width: 110px;
}

.login-and-cart-container {
    width: 25px;
}

.login-and-cart-wrapper {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.login-wrapper {
    visibility: hidden;
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

/* Log in page */
.login-menu-container{
    background-color: var(--mid-beige);
    width: 280px;
    max-width: 500px;
    height: 68%;
    border-radius: 16px;
    z-index: 3;
    box-shadow: -8px 0px 12px 0px rgba(0, 0, 0, 0.4);
    align-self: center;
    display: flex;
    justify-content: center;
}

.login-overlay{
    /* filter: grayscale(20); */
    background-color: rgba(182, 18, 81, 0.35);
    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
}

/* .move-login-menu-left {
    /* right: -300px; */
    /* display: block; */
/* } */
.login-menu-wrapper{
    background-color: var(--dark-green);
    border-radius: 16px;
    width: 90%;
    height: 200px;
    display: flex;
    /* align-items: center; */
    /* justify-content:right; */
}
.login-menu-wrapper input{
    background-color: var(--light-beige);
    width: 90%;
    height: 30px;
    background: rgba(255, 255, 255, 0.535);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: 1px solid #FFF;
    border-radius: 24px;

}

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

@media screen and (min-width: 700px){
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
.hamburger-wrapper{
  visibility: hidden;
}

.links-wrapper{
  display: flex;
}

.login-wrapper{
  visibility: visible;
}



}
</style>
