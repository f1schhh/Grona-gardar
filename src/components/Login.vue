<template>
          <div class="login-register-link-wrapper">
            <h1>Logga in</h1>
            <h1>Registrera</h1>
          </div>
        <div class="login-menu-wrapper">

          <form action="" method="post">
            <label for="username">E-postadress: </label>
            <input type="text" required placeholder="E-postadress:">
            <label for="password">Lösenord: </label>
            <input type="text" required>
          </form>
        </div>
</template>

<style scoped>
.login-menu-wrapper {
  background-color: var(--dark-green);
  border-radius: 16px;
  width: 90%;
  height: 200px;
  display: flex;
  align-self: center;
  align-content: center;

}

.login-register-link-wrapper{
  background-color: rgb(126, 126, 34);
  display: flex;
  color: rgb(245, 245, 245);
  font-size: 2.2vw;
  text-align: center;
  justify-content: center;
  column-gap: 20px
}

.login-register-link-wrapp h1{
  color: var(--light-beige);
}

.login-menu-wrapper input {
  background-color: var(--light-beige);
  width: 90%;
  height: 30px;
  background: rgba(255, 255, 255, 0.535);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  border: 1px solid #FFF;
  border-radius: 24px;
}

/*===================*/
@media screen and (min-width: 451px) {

  .login-register-link-wrapper h1{

    font-size: 20px;
}

}


</style>
