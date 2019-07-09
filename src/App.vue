<template>
  <div id="app">
    <Header />
    <ion-app>
      <ion-vue-router />
    </ion-app>
    <Tabs />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tabs from './components/Tabs.vue'
export default {
  name: 'app',
  components: {
    Header,
    Tabs
  }
}
</script>

<style>
</style>
