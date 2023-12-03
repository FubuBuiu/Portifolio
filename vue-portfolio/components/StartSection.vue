<template>
  <v-container class="container-size pa-6">
    <v-row class="font-size ma-0 mt-10 justify-center primary--text text-center"
      >Esse portifólio foi feito em Vue.js</v-row
    >
    <v-row class="justify-center ma-0 mt-15">
      <lottie-vue-player
        autoplay
        :src="vueLottie"
        style="width: auto; height: 150px; background-color: transparent"
      >
      </lottie-vue-player>
    </v-row>
    <v-row class="font-size ma-0 mt-15 justify-center primary--text">+</v-row>
    <v-row class="ma-0 mt-15 justify-center">
      <v-col
        v-for="(icon, index) in icons"
        :key="index"
        class="px-6"
        align="center"
        cols="auto"
      >
        <component :is="icon" :height="'80'"></component>
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
.container-size {
  min-height: calc(100vh - 66px);
  width: 100vw;
}
.font-size {
  font-size: 34px;
}
</style>
