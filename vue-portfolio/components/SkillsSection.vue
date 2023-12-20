<template>
  <v-container class="pa-6 ma-0 overflow-hidden" style="position: relative">
    <v-row class="primary--text ma-auto pa-0 title-section justify-center">
      Habilidades
    </v-row>
    <v-row class="ma-0 pa-0 d-flex align-center" style="height: 450px">
      <div class="animationsContainer">
        <lottie-vue-player
          v-for="(animation, index) in animationList.reverse()"
          :key="index"
          autoplay
          loop
          :src="animation"
          :style="{
            height: isMobile ? '120px' : '150px',
            width: isMobile ? '150px' : '170px',
            backgroundColor: 'transparent',
          }"
        />
      </div>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import typescriptAnimation from "@/lottie-animations/typescriptWalking.json";
import cypressAnimation from "@/lottie-animations/cypressWalking.json";
import htmlAnimation from "@/lottie-animations/htmlWalking.json";
import flutterAnimation from "@/lottie-animations/flutterWalking.json";
import cssAnimation from "@/lottie-animations/cssWalking.json";
import javascriptAnimation from "@/lottie-animations/javascriptWalking.json";
import jestAnimation from "@/lottie-animations/jestWalking.json";
import lottieAnimation from "@/lottie-animations/lottieWalking.json";
import muiAnimation from "@/lottie-animations/muiWalking.json";
import nextAnimation from "@/lottie-animations/nextWalking.json";
import nuxtAnimation from "@/lottie-animations/nuxtWalking.json";
import reactAnimation from "@/lottie-animations/reactWalking.json";
import sassAnimation from "@/lottie-animations/sassWalking.json";
import styledComponentsAnimation from "@/lottie-animations/styledComponentsWalking.json";
import vuetifyAnimation from "@/lottie-animations/vuetifyWalking.json";
import vueAnimation from "@/lottie-animations/vueWalking.json";
export default Vue.extend({
  data() {
    return {
      isMobile: window.matchMedia("(max-device-width: 600px)").matches,
    };
  },
  computed: {
    animationList(): string[] {
      return [
        JSON.stringify(htmlAnimation),
        JSON.stringify(cssAnimation),
        JSON.stringify(javascriptAnimation),
        JSON.stringify(typescriptAnimation),
        JSON.stringify(vueAnimation),
        JSON.stringify(vuetifyAnimation),
        JSON.stringify(nuxtAnimation),
        JSON.stringify(reactAnimation),
        JSON.stringify(muiAnimation),
        JSON.stringify(nextAnimation),
        JSON.stringify(styledComponentsAnimation),
        JSON.stringify(sassAnimation),
        JSON.stringify(jestAnimation),
        JSON.stringify(cypressAnimation),
        JSON.stringify(lottieAnimation),
        JSON.stringify(flutterAnimation),
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.title-section {
  line-height: 1;
  font-size: 48px;
}
.animationsContainer {
  position: absolute;
  display: flex;
  animation: moveToRight 20s linear infinite;
}
@keyframes moveToRight {
  0% {
    left: -2700px;
  }
  100% {
    left: 100%;
  }
}
@media screen and (max-device-width: 600px) {
  .title-section {
    font-size: 38px;
  }
  @keyframes moveToRight {
    0% {
      left: -2370px;
    }
    100% {
      left: 100%;
    }
  }
}
</style>
