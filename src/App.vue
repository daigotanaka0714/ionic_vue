<template>
  <div id="app">
    <ion-app>
      <Header />
        <ion-vue-router />
      <Tabs />
    </ion-app>
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
