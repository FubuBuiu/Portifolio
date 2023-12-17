<template>
  <v-container
    class="pa-0 py-6"
    :style="{ backgroundColor: $vuetify.theme.themes[theme].secondary }"
    fluid
  >
    <v-row class="primary--text ma-0 mx-6 pa-0 title-section" justify="center"
      >Sobre mim</v-row
    >
    <v-row class="ma-0 horizontal-margin pa-0" justify="center" align="center">
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
.title-section {
  line-height: 1;
  font-size: 48px;
}
@media screen and (max-device-width: 600px) {
  .title-section {
    font-size: 38px;
  }
  @media screen and (max-device-width: 399px) {
    .horizontal-margin {
      margin: 0 24px !important;
    }
  }
}
</style>
