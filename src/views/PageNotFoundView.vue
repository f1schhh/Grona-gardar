<template>
  <div class="error_msg_container">
    <h1>Sidan du sökte finns inte</h1>
    <router-link to="/">
      <button class="button_more_products">Tillbaka till startsidan</button>
    </router-link>
  </div>
</template>
<style scoped>
.error_msg_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}
</style>
