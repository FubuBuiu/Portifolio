<template>
  <v-container
    class="pa-6"
    :style="{ backgroundColor: $vuetify.theme.themes[theme].secondary }"
    fluid
  >
    <v-row
      class="primary--text ma-0 pa-0"
      style="font-size: 48px; line-height: 1"
      justify="center"
      >Sobre mim</v-row
    >
    <v-row class="ma-0 pa-0" justify="center" align="center">
      <CardAboutMe />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    theme(): "light" | "dark" {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
