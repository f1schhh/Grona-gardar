<script>
export default {
  data() {
    return {
      searchQuery: null,
    }
  },
  methods: {
    searchClick() {
      if (this.searchQuery) {
        this.$router.push('/search/' + this.searchQuery);
      }
    }
  }
}
</script>

<style scoped>
#searchDiv {
  width: 80%;
  display: flex;
  align-items: center;
  position: relative;
}


#searchInput {
  border-radius: 2rem;
  height: 1.5rem;
  background-color: var(--light-beige);
  border: inset var(--dark-green) 1.5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
  text-align: left;
  color: var(--dark-green);
  width: 100%;
  padding: 0.25rem;
  padding-left: 1rem;
}


#searchIcon {
  position: absolute;
  right: 10px;
}
</style>

<template>
  <div id="searchDiv">
    <input type="text" id="searchInput" v-model="searchQuery" @keyup.enter="searchClick"
      placeholder="Sök i vårt sortiment..." required>
    <i id="searchIcon" class="bi bi-search" @click="searchClick"></i>
  </div>
</template>
