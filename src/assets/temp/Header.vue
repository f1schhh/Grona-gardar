<template>
  <header>
    <div class="header-wrapper">
      <div><i class="bi bi-list"></i></div>
      <div style="margin:0 !important;">Gröna gårdar</div>
      <div><i class="bi bi-cart"></i></div>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  background-color: var(--dark-beige);
}

.header-wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  color: var(--dark-green);
  justify-content: space-between;
  align-items: center;
}

header div {
  margin: 0rem 1rem 0rem 1rem;
}
</style>
