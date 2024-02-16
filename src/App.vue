<script>
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue';



export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Header,
    SearchBar
  },
}


</script>


<template>
  <Header></Header>
  <SearchBar></SearchBar>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>
