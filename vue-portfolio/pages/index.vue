<template>
  <v-app
    :style="{
      background: $vuetify.theme.themes[theme].background,
      position: 'relative',
    }"
  >
    <!-- ---------HEADER--------- -->
    <HeaderComponent
      :is-md-up="isMdUp"
      style="z-index: 4"
      :sections-ref="sectionsRef"
      :is-menu-open="showDrawer"
      @toogleMenuVisibility="toggleMenuVisibility"
    />
    <!-- ------------------------ -->
    <!-- ---------MENU--------- -->
    <CustomDrawer
      v-if="!isMdUp"
      style="z-index: 3"
      :show="showDrawer"
      :sections-ref="sectionsRef"
      @toogleVisibility="toggleMenuVisibility"
    />
    <!-- ---------------------- -->
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
        <ContactsSection />
      </section>
    </CustomScrollbar>
    <!-- ------------------------------- -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { SectionsRefType } from "~/types/global";

export default Vue.extend({
  components: {},
  data() {
    return {
      sectionsRef: {} as SectionsRefType,
      showDrawer: false as boolean,
    };
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    isMdUp(): boolean {
      return this.$vuetify.breakpoint.width >= 1030;
    },
  },
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
  methods: {
    toggleMenuVisibility() {
      this.showDrawer = !this.showDrawer;
    },
  },
});
</script>
<style lang="scss" scoped>
</style>
