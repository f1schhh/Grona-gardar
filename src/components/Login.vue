<template>
          <div class="login-register-link-wrapper">
            <h1 class="login-link" :class="{ underline: loginBtn }" @click="onLoginClick">Logga in</h1>
            <h1 class="register-link" :class="{ underline: !loginBtn }" @click="onRegisterClick">Registrera</h1>
        </div>

        <div class="login-menu-wrapper">

          <form action="" method="post">
            <p for="username">E-postadress </p>
            <input type="text" required >
            <p for="password">Lösenord </p>
            <input type="text" required>
          </form>
        </div>
</template>

<script>
export default{
    data(){
        return{
            loginBtn: true,
        }
    },
    methods:{
        onLoginClick(){
            this.loginBtn = true
        },
        onRegisterClick(){
            this.loginBtn = false
        }
    }
}
</script>

<style scoped>
.login-menu-wrapper {
  background-color: var(--dark-green);
  border-radius: 16px;
  width: 90%;
  height: 200px;
  display: flex;
  align-self: center;
  align-content: center;
  justify-content: center;
  padding: 10px;
}

.login-register-link-wrapper{
  display: flex;
  font-size: 2.2vw;
  text-align: center;
  justify-content: center;
  column-gap: 20px;
  margin: 20px 00;
}
.login-register-link-wrapper h1{
    cursor: pointer;
    color: var(--dark-green);
}
.underline{
    font-family: Anevir Next DemiBold ;
    border-bottom: var(--dark-green) 0.125em solid;
}

/* label{
    color: var(--light-beige);
    font-family: Anevir Next Cyr Medium;
    font-size: 16px;
} */

p{
    color: var(--light-beige);
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
}

.login-menu-wrapper input {
  background-color: var(--light-beige);
  width: 90%;
  height: 30px;
  background: rgba(255, 255, 255, 0.535);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: 1px solid #FFF;
  border-radius: 24px;
  background-color: var(--light-beige);
}





/*===================*/
@media screen and (min-width: 451px) {

  .login-register-link-wrapper h1{

    font-size: 20px;
}

}


</style>
