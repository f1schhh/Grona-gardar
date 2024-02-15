<script>
import Header from './components/Header.vue';


export default {
  data() {
    return {}
  },
  methods: {

  },
  components: {
    Header,
  },
}


</script>


<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>
</template>
