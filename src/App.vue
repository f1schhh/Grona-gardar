<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import SearchBar from './components/SearchBar.vue';



export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Header,
    Footer,
    SearchBar
  },
}


</script>


<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>
</template>
