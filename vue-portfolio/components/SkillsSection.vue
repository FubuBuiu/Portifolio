<template>
  <v-container
    fluid
    class="pa-6 overflow-hidden"
    style="position: relative; height: 700px"
  >
    <v-row
      class="primary--text ma-0 pa-0 justify-center"
      style="font-size: 48px; line-height: 1"
    >
      Habilidades
    </v-row>
    <div class="airplaneOneContainer">
      <lottie-vue-player
        autoplay
        loop
        :src="airplaneAnimation1"
        style="width: 100%; background-color: transparent"
      />
    </div>
    <div class="airplaneTwoContainer">
      <lottie-vue-player
        autoplay
        loop
        :src="airplaneAnimation2"
        style="width: 100%; background-color: transparent"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import airplaneAnimation1 from "@/lottie-animations/airplane1.json";
import airplaneAnimation2 from "@/lottie-animations/airplane2.json";
export default Vue.extend({
  data() {
    return {
      airplaneAnimation1: JSON.stringify(airplaneAnimation1),
      airplaneAnimation2: JSON.stringify(airplaneAnimation2),
    };
  },
});
</script>

<style lang="scss" scoped>
.airplaneOneContainer {
  width: 800px;
  position: absolute;
  top: 0;
  margin-top: 150px;
  animation: moveToRight 20s linear infinite;
}
.airplaneTwoContainer {
  width: 800px;
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  animation: moveToLeft 20s linear infinite;
}
@keyframes moveToRight {
  0% {
    left: -800px;
  }
  100% {
    left: 100%;
  }
}
@keyframes moveToLeft {
  100% {
    right: 100%;
  }
  0% {
    right: -800px;
  }
}
</style>
