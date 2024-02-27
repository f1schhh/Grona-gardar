<template>
<<<<<<< HEAD
    <div class="login-register-link-wrapper">
        <h1 class="login-link" :class="{ underline: loginBtn }" @click="onLoginClick">Logga in</h1>
        <h1 class="register-link" :class="{ underline: !loginBtn }" @click="onRegisterClick">Registrera</h1>
    </div>

    <div v-if="loginBtn" class="login-menu-wrapper">
=======
          <div class="login-register-link-wrapper">
            <h1 class="login-link" :class="{ underline: loginLink }" @click="onLoginLink">Logga in</h1>
            <h1 class="register-link" :class="{ underline: !loginLink }" @click="onRegisterLink">Registrera</h1>
        </div>

        <div v-if="loginLink" class="login-menu-wrapper">
>>>>>>> 53760ca (login and register form)

        <form action="" method="post">
            <p for="username">E-postadress </p>
<<<<<<< HEAD
            <input type="text" required>
            <p for="password">Lösenord </p>
            <input type="text" required>

            <p>Glömt lösenord?</p>


        </form>
        <input class="login-butt" type="button" value="Logga in">
    </div>
    <div v-else="!loginBtn" class="login-menu-wrapper">
        <p>Hej</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginBtn: true,
        }
    },
    methods: {
        onLoginClick() {
            this.loginBtn = true
        },
        onRegisterClick() {
            this.loginBtn = false
=======
            <input v-model="username" type="text" required :placeholder="suggestedUsername">
            <p class="error-message">{{ usernameErrorMessage }}</p>
            <p for="password">Lösenord </p>
            <input v-model="password" type="text" required >
            <p class="error-message">{{ passwordErrorMessage }}</p>
            <p class="forgotten-password-link">Glömt lösenord?</p>
          </form>
          <input class="login-butt" @click="onLoginClick" type="button" value="Logga in">
        </div>

        <div v-else="!loginLink" class="login-menu-wrapper">
            <form>
            <p for="name">Namn</p>
            <input v-model="name" type="text" required >
            <p class="error-message">{{ name }}</p>
            <p for="username">E-postadress </p>
            <input v-model="username" type="text" required >
            <p class="error-message">{{ newUsernameErrorMessage }}</p>
            <p for="password">Lösenord </p>
            <input v-model="password" type="text" required>
            <p class="error-message">{{ usernameErrorMessage }}</p>
            <p for="confirmPassword">Bekräfta lösenordet </p>
            <input v-model="confirmPassword" type="text" required>
            <p class="error-message">{{ usernameErrorMessage }}</p>
        </form>
        <input class="login-butt" @click="onRegisterClick" type="button" value="Registrera">
        </div>
</template>

<script>
export default{
    data(){
        return{
            loginLink: true,
            username: null,
            password: null,
            usernameErrorMessage: null,
            suggestedUsername:null
        }
    },
    methods:{
        onLoginLink(){
            this.loginLink = true
        },
        onRegisterLink(){
            this.loginLink = false
            this.usernameErrorMessage = null
        },
        onLoginClick(){
            if(this.username === null || this.username === ''){
                this.usernameErrorMessage = "Skriv din e-mail i fältet ovan."

                this.suggestedUsername = "malin@admin.com"
            }
            if(this.password === null || this.password === ''){
                this.passwordErrorMessage = "Skriv in ett lösenord i fältet ovan."
            }
>>>>>>> 53760ca (login and register form)
        }
    }
}
</script>

<style scoped>
.login-menu-wrapper {
<<<<<<< HEAD
    background-color: var(--dark-green);
    border-radius: 16px;
    width: 90%;
    display: flex;
    align-self: center;
    align-content: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    /* Centers the input fields */
}

.login-register-link-wrapper {
    display: flex;
    font-size: 2.2vw;
    text-align: center;
    justify-content: center;
    column-gap: 20px;
    margin: 20px 00;
=======
  background-color: var(--dark-green);
  border-radius: 16px;
  width: 90%;
  display: flex;
  align-self: center;
  margin: 10px;
  padding-top: 20px;
  flex-direction: column;
}
.login-register-link-wrapper{
    /* background-color: aquamarine; */
  display: flex;
  font-size: 2.2vw;
  width: 90%;
  align-self: center;
  text-align: center;
  justify-content:space-evenly;
  column-gap: 20px;
  margin: 20px 00;
>>>>>>> 53760ca (login and register form)
}

.login-register-link-wrapper h1 {
    cursor: pointer;
    color: var(--dark-green);
}

.underline {
    font-family: Anevir Next DemiBold;
    border-bottom: var(--dark-green) 0.125em solid;
}

<<<<<<< HEAD
p {
    color: var(--light-beige);
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 5px;
}

form {
    /* background-color: chocolate; */
    width: 100%;
}

.login-menu-wrapper input[type="text"] {
    background-color: var(--light-beige);
    width: 90%;
    height: 30px;
    /* background: rgba(255, 255, 255, 0.535); */
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: 1px solid #FFF;
    border-radius: 24px;

=======
form{
    width: 100%;
    text-align: center;
}

p{
    color: var(--light-beige);
    font-size: 12px;
    padding-top: 2px;
    padding-bottom: 5px;
    margin-left: 5%;
    text-align: left;
}

.error-message{
    padding-top: 1px;
    color: red;
    height: 15px;
}

input {
  box-sizing: border-box; /* Include padding and border in the specified width */
}

.forgotten-password-link{
    text-align: center;
    margin:0;
}

.forgotten-password-link:hover{
    cursor:pointer;
}

.login-menu-wrapper input[type="text"]{
    background-color: var(--light-beige);
    width: 90%;
    height: 30px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: 1px solid #FFF;
    border-radius: 24px;
    padding: 00 8px;
>>>>>>> 53760ca (login and register form)
}

.login-butt {
    background-color: var(--mid-beige);
    border-radius: 19px;
    border: 1px solid #FFF;
    width: 143px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    height: 37px;
    font-size: 1rem;
    position: relative;
    bottom: -18.5px;
    align-self: center;
    cursor:pointer;
}

.login-butt:active{
    background-color: var(--dark-beige);

}

.login-butt:hover {
    cursor: pointer;
}

/*===================*/
@media screen and (min-width: 451px) {

    .login-register-link-wrapper h1 {

        font-size: 20px;
    }

}
</style>
