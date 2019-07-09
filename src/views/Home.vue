<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    showModal: async function() {
      const modal = await this.$ionic.modalController.create({
        componentProps: {
          propsData: {
            userData: Math.round(Math.random() * 100)
          }
        }
      });
      await modal.present();
    }
  }
};
</script>
