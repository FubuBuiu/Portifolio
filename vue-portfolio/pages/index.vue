<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <!-- ---------HEADER--------- -->
    <HeaderComponent
      :sections-ref="sectionsRef"
      :is-md-up="isMdUp"
      :is-mobile="isMobile"
    />
    <!-- ------------------------ -->
    <!-- ------------CONTENT------------ -->
    <CustomScrollbar :scroll-thumb-color="$vuetify.theme.themes[theme].primary">
      <section ref="startSection">
        <StartSection />
      </section>
      <section ref="aboutMeSection">
        <AboutMeSection />
      </section>
      <section ref="skillsSection">
        <SkillsSection />
      </section>
      <section ref="projectsSection">
        <ProjectsSection />
      </section>
      <section ref="contactsSection">
        <div class="div5"></div>
      </section>
    </CustomScrollbar>
    <!-- ------------------------------- -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { SectionsRefType } from "~/components/HeaderComponent.vue";

export default Vue.extend({
  components: {},
  data() {
    return {
      sectionsRef: {} as SectionsRefType,
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    isMdUp(): boolean {
      return this.$vuetify.breakpoint.width >= 1030;
    },
    isMobile(): boolean {
      return this.$vuetify.breakpoint.width <= 600;
    },
  },
  watch: {},
  created() {},
  mounted() {
    const startSection = this.$refs.startSection as HTMLDivElement;
    const aboutMeSection = this.$refs.aboutMeSection as HTMLDivElement;
    const skillsSection = this.$refs.skillsSection as HTMLDivElement;
    const projectsSection = this.$refs.projectsSection as HTMLDivElement;
    const contactsSection = this.$refs.contactsSection as HTMLDivElement;

    this.sectionsRef = {
      startSection,
      aboutMeSection,
      skillsSection,
      projectsSection,
      contactsSection,
    };
  },
});
</script>
<style lang="scss" scoped>
.div4,
.div5 {
  width: 100%;
  height: calc(100vh - 66px);
}
.div4 {
  background-color: yellow;
}
.div5 {
  background-color: orange;
}
</style>
