<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'


export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Header,
    Footer
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
