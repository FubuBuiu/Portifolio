<template>
  <v-container class="container-config pa-6 d-flex flex-column">
    <v-row
      class="ma-0 flex-grow-0 title-top-margin justify-center primary--text text-center font-size"
      style="line-height: 1"
    >
      Este portfólio foi feito em Vue.js
    </v-row>
    <v-row class="justify-center ma-0 flex-grow-0">
      <lottie-vue-player autoplay :src="vueLottie" class="lottie" />
    </v-row>
    <v-row
      class="ma-0 flex-grow-0 justify-center primary--text"
      style="font-size: 40px"
      >+</v-row
    >
    <v-row class="ma-0 justify-center flex-grow-0 space-between-icons">
      <v-col
        v-for="(icon, index) in icons"
        :key="index"
        class="pa-0"
        align="center"
        cols="auto"
      >
        <component :is="icon" class="icon-size"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import vueLogoAnimation from "@/lottie-animations/vue-logo-animation.json";
import NuxtIcon from "@/svg/NuxtIcon.vue";
import VuetifyIcon from "@/svg/VuetifyIcon.vue";
import TypescriptIcon from "@/svg/TypescriptIcon.vue";
import SassIcon from "@/svg/SassIcon.vue";
import LottieIcon from "@/svg/LottieIcon.vue";

export default Vue.extend({
  components: {
    NuxtIcon,
    VuetifyIcon,
    TypescriptIcon,
    SassIcon,
    LottieIcon,
  },
  data() {
    return {
      vueLottie: JSON.stringify(vueLogoAnimation),
      icons: [NuxtIcon, VuetifyIcon, TypescriptIcon, SassIcon, LottieIcon],
    };
  },
});
</script>

<style lang="scss" scoped>
.container-config {
  min-height: calc(100vh - 66px);
  width: 100vw;
  row-gap: 80px;
}
.title-top-margin {
  margin-top: 40px !important;
}
.font-size {
  font-size: 34px;
}
.space-between-icons {
  column-gap: 40px;
  row-gap: 20px;
}
.icon-size {
  height: 80px;
}
.lottie {
  height: 150px;
  background-color: transparent;
}
@media screen and (max-device-width: 600px) {
  .title-top-margin {
    margin-top: 0px !important;
  }
  .icon-size {
    height: 65px;
  }
  @media screen and (max-device-width: 400px) {
    .font-size {
      font-size: 30px;
    }
    .container-config {
      row-gap: 50px;
    }
  }
}
</style>
