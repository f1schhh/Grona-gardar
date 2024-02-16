<script>
import Header from './components/Header.vue';
<<<<<<< HEAD
import Footer from './components/Footer.vue'
=======
import SearchBar from './components/SearchBar.vue';

>>>>>>> b626f6d43ddbd7137e794339d9528fc421008a50


export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Header,
<<<<<<< HEAD
    Footer
=======
    SearchBar
>>>>>>> b626f6d43ddbd7137e794339d9528fc421008a50
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
