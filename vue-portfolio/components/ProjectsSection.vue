<template>
  <v-container
    fluid
    class="pa-6"
    :style="{ backgroundColor: $vuetify.theme.themes[theme].secondary }"
  >
    <v-row class="primary--text ma-0 pa-0 title-section justify-center"
      >Projetos</v-row
    >
    <v-row class="ma-0 mt-8 pa-0 justify-center" style="gap: 30px">
      <v-col v-if="loading" cols="auto" class="pa-0 ma-0">
        <CustomSkeletonLoader />
      </v-col>
      <v-col
        v-for="project in projects"
        v-else
        :key="project.id"
        cols="auto"
        class="pa-0 ma-0"
      >
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { getProjects, Project } from "~/server/firebase";
export default Vue.extend({
  data() {
    return {
      loading: false as boolean,
      projects: [] as Project[],
    };
  },
  computed: {
    theme(): "light" | "dark" {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  async created() {
    this.loading = true;
    this.projects = await getProjects();
    this.loading = false;
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
}
</style>
