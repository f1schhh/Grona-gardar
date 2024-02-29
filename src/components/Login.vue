<template>
    <div class="login-register-link-wrapper">
        <h1 class="login-link" :class="{ underline: loginLink }" @click="onLoginLink">Logga in</h1>
        <h1 class="register-link" :class="{ underline: !loginLink }" @click="onRegisterLink">Registrera</h1>
    </div>
    <div class="login-container">
        <div v-if="loginLink" class="login-menu-wrapper">

            <form action="" method="post">
                <p for="username">E-postadress </p>
                <input v-model="email" type="email" required>
                <p class="error-message">{{ usernameErrorMessage }}</p>
                <p for="password">Lösenord </p>
                <input v-model="password" type="password" required>
                <p class="error-message">{{ passwordErrorMessage }}</p>
                <p class="forgotten-password-link">Glömt lösenord?</p>
            </form>
            <input class="login-butt" @click="onLoginClick" type="button" value="Logga in">
        </div>

        <div v-else="!loginLink" class="login-menu-wrapper">
            <form>
                <div>
                    <p for="name">Namn</p>
                    <input v-model="name" type="text" required>
                    <p class="error-message">{{ nameErrorMessage }}</p>
                </div>
                <div>
                    <p for="username">E-postadress </p>
                    <input v-model="username" type="text" required>
                    <p class="error-message">{{ newUsernameErrorMessage }}</p>
                </div>
                <div>
                    <p for="password">Lösenord </p>
                    <input v-model="password" type="text" required>
                    <p class="error-message">{{ newPasswordErrorMessage }}</p>
                </div>
                <div>
                    <p for="confirmPassword">Bekräfta lösenordet </p>
                    <input v-model="confirmPassword" type="text" required>
                    <p class="error-message">{{ newPasswordErrorMessage2 }}</p>
                </div>
            </form>
            <input class="login-butt" @click="onSignUpClick" type="button" value="Registrera"
                :disabled="invalidRegistration">
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAccountStore } from '../store'
import axios from 'axios'

export default {
    computed: {
        ...mapStores(useAccountStore)

    },
    data() {
        return {
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

            users: ''

        }
    },
    methods: {
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
                    this.email = null
                    this.password = null
                }
                else {

                }
            }

        },
        onSignUpClick() {

            this.accountsStore.createAccount({
                name: this.name,
                username: this.mail,
                password: this.password

            })
        }
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

/*===================*/
@media screen and (min-width: 451px) {

    .login-register-link-wrapper h1 {

        font-size: 20px;
    }

}
</style>
