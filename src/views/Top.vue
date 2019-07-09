<template>
  <div class="ion-page">
    <Header />
    <Cards />
    <Tabs />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue'
import Tabs from '../components/Tabs.vue'
export default {
  name: "top",
  components: {
    Header,
    Cards,
    Tabs
  }
};
</script>
