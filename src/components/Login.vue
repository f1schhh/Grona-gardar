<template>
    <!-- Login div -->

    <div ref="overlay" @click="exitLogin" class="overlay-for-login"></div>

    <div ref="loginContainer" class="login-menu-container">

    <div class="exit-login-container"><div class="exit-login-wrapper" @click="exitLogin"><i class="bi bi-x-lg"></i></div></div>

    <div class="login-register-link-wrapper">
        <h1 class="login-link" :class="{ underline: loginLink }" @click="onLoginLink">Logga in</h1>
        <h1 class="register-link" :class="{ underline: !loginLink }" @click="onRegisterLink">Registrera</h1>
    </div>
    <div class="login-container">
        <div v-if="loginLink" class="login-menu-wrapper">
            <form>

                <div>
                    <p>E-postadress </p>
                    <input v-model="email" type="email" required>
                    <p class="error-message">{{ usernameErrorMessage }}</p>
                </div>
                <div>
                    <p>Lösenord </p>
                    <input v-model="password" type="password" required>
                    <p class="error-message">{{ passwordErrorMessage }}</p>
                </div>

                <p class="forgotten-password-link">Glömt lösenord?</p>

            </form>
            <input class="login-butt" @click="onLoginClick" type="button" value="Logga in">
        </div>

        <div v-else="!loginLink" class="login-menu-wrapper">
            <form>

                <div>
                    <p>Namn</p>
                    <input v-model="signUpName" type="text" required>
                    <p class="error-message">{{ nameErrorMessage }}</p>
                </div>
                <div>
                    <p>E-postadress </p>
                    <input v-model="signUpEmail" type="email" required>
                    <p class="error-message">{{ newUsernameErrorMessage }}</p>
                </div>
                <div>
                    <p>Lösenord </p>
                    <input v-model="signUpPassword" type="password" required>
                    <p class="error-message">{{ newPasswordErrorMessage }}</p>
                </div>
                <div>
                    <p>Bekräfta lösenordet </p>
                    <input v-model="signUpPassword2" type="password" required>
                    <p class="error-message">{{ newPasswordErrorMessage2 }}</p>
                </div>

            </form>
            <input class="login-butt" @click="onSignUpClick" type="button" value="Registrera">
        </div>
    </div>
</div>
<!-- </div> -->
</template>

<script>
// import { mapStores } from 'pinia'
// import { useAccountStore } from '../store'
// import axios from 'axios'

export default {
    props:{
        onLoginIconClick: Boolean
    },
    emits: ['user-name', 'overlay-clicked'],
    // emits: ['overlay-clicked'],
    // computed: {
    //     ...mapStores(useAccountStore)

    // },
    data() {
        return {

            receivedLoginIconClick: false,
            isLoginIconClickTrue: false,

            loginLink: true,

            // Sign in
            email: '',
            password: '',

            usernameErrorMessage: null,
            passwordErrorMessage: null,

            // Sign up
            nameErrorMessage: null,
            newUsernameErrorMessage: null,
            newPasswordErrorMessage: null,
            newPasswordErrorMessage2: null,

            // Sign up input
            signUpName: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpPassword2: '',

            users: ''

        }
    },
    watch: {
        onLoginIconClick(ifLoginIconIsClickedBoolean) {
            console.log('onLoginIconClick updated:', ifLoginIconIsClickedBoolean);
            this.isLoginIconClickTrue = ifLoginIconIsClickedBoolean

            if(!ifLoginIconIsClickedBoolean){
                this.exitLogin()
            }
            else if(ifLoginIconIsClickedBoolean){
                this.handleLoginIconClick()
            }
        },
    },
    methods: {
        handleLoginIconClick(){

        console.log('The form is supposed to show');

        const overlay = this.$refs.overlay;
        const loginContainer = this.$refs.loginContainer;

        loginContainer.classList.remove("fade-out")
        loginContainer.style.display = "flex"
        overlay.style.display = "flex"

        setTimeout(function () {
            overlay.classList.add("increase-blur-when-using-login")
            loginContainer.classList.add('fade-in');
        }, 100)
        },

        // },
        // THis is written i native because I cant find a solution that is similar using vue.
        exitLogin(){
            console.log('exit login form')
            const overlay = this.$refs.overlay;
            const loginContainer = this.$refs.loginContainer;

            loginContainer.classList.remove("fade-in")

            //Transition opacity to make div transparent
            overlay.classList.remove("increase-blur-when-using-login")
            loginContainer.classList.remove("fade-in")
            loginContainer.classList.add("fade-out")


            setTimeout(function () {

                overlay.style.display = "none";
                loginContainer.style.display ="none"

            }, 500)

            this.$emit('overlay-clicked');

            this.passwordErrorMessage = '';
            this.usernameErrorMessage = '';


        },
        // To change page between log in and sign up on click
        onLoginLink() {
            this.loginLink = true
        },
        onRegisterLink() {
            this.loginLink = false
            // this.usernameErrorMessage = null
        },
        async onLoginClick() {

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!this.email || !emailRegex.test(this.email)) {
                this.usernameErrorMessage = 'Ogiltig e-postadress';
            }
            else { this.usernameErrorMessage = ''; }

            if (!this.password) {
                this.passwordErrorMessage = 'Fyll i ditt lösenord för att fortsätta.';
            } else {
                this.passwordErrorMessage = '';
            }

            const response = await fetch('./src/database.json');
            const data = await response.json();

            for (const user of data.users) {
                console.log(`Email: ${user.email}, Password: ${user.password}`);

                if (user.email === this.email && user.password === this.password) {

                    console.log('du är inloggad')
                    this.$emit('userName', user.first_name);
                    localStorage.setItem("user_id", user.id);
                    this.email = null
                    this.password = null
                    this.exitLogin()

                }
                else {

                    this.passwordErrorMessage = 'Felaktigt lösenor eller epost.';
                    this.email = null
                    this.password = null

                }
            }

        },
        // onSignUpClick() {

        //     this.accountsStore.createAccount({
        //         name: this.name,
        //         username: this.mail,
        //         password: this.password

            // })
        //  }
}
}

</script>

<style scoped>
.login-container {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.exit-login-wrapper{
    cursor: pointer;
    width: fit-content;
}

.exit-login-container{
    width: 90%;
    /* background-color: chartreuse; */
    margin: 10px;
    display: flex;
    justify-content: flex-end;
}

.bi {
    font-size: 24px;
}

.login-menu-wrapper {
    background-color: var(--dark-green);
    border-radius: 16px;
    width: 90%;
    display: flex;
    align-self: self-start;
    margin: 10px;
    padding-top: 20px;
    flex-direction: column;
}

.login-register-link-wrapper {
    /* background-color: aquamarine; */
    display: flex;
    font-size: 2.2vw;
    width: 90%;
    align-self: center;
    text-align: center;
    justify-content: space-evenly;
    column-gap: 20px;
    margin: 20px 00;
}

.login-register-link-wrapper h1 {
    cursor: pointer;
    color: var(--dark-green);
}

.underline {
    font-family: Anevir Next DemiBold;
    border-bottom: var(--dark-green) 0.125em solid;
}

form {
    width: 100%;
    text-align: center;
}

p {
    color: var(--light-beige);
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 5px;
    margin-left: 5%;
    text-align: left;
}

.error-message {
    padding-top: 1px;
    color: var(--light-beige);
    height: 15px;
}

input {
    box-sizing: border-box;
    /* Include padding and border in the specified width */
}

.forgotten-password-link {
    text-align: center;
    margin: 0;
}

.forgotten-password-link:hover {
    cursor: pointer;
}

.login-menu-wrapper input[type="text"],
input[type="password"],
input[type="email"] {
    background-color: var(--light-beige);
    width: 90%;
    height: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: 1px solid #FFF;
    border-radius: 24px;
    padding: 00 8px;
}

.login-butt {
    background-color: var(--mid-beige);
    border-radius: 24px;
    border: 1px solid #FFF;
    width: 143px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 37px;
    font-size: 16px;
    position: relative;
    bottom: -18.5px;
    align-self: center;
    cursor: pointer;
}

.login-butt:active {
    background-color: var(--dark-beige);
    box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.login-menu-container {
  display: none;
  background-color: var(--mid-beige);
  width: 60vw;
  width: 300px;
  height: fit-content;
  height: 500px;
  padding: 10px;
  border-radius: 16px;
  z-index: 5;
  box-shadow: -8px 0px 12px 0px rgba(0, 0, 0, 0.4);
  align-self: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
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

.overlay-for-login {
  display: none;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(0px);
  transition: background-color 0.75s, backdrop-filter 0.75s;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 3;
  cursor: pointer;
  justify-content: center;
  align-content: center;
}

.increase-blur-when-using-login {
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(1px);
}



/*===================*/
@media screen and (min-width: 451px) {

    .login-register-link-wrapper h1 {

        font-size: 20px;
    }

}
</style>
