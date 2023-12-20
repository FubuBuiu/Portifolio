<template>
  <v-system-bar
    class="toolbar"
    v-bind="$attrs"
    color="primary"
    height="66"
    elevation="0"
  >
    <v-row v-if="isMdUp" class="v-row" justify="center">
      <v-btn
        v-for="button in buttonsOptions"
        :key="button.text"
        class="px-3 button-navigation"
        :style="{ color: $vuetify.theme.currentTheme.contrastText }"
        color="transparent"
        elevation="0"
        tile
        @click="button.handleClick"
        >{{ button.text }}</v-btn
      >
    </v-row>
    <div class="switch-area">
      <CustomSwitch
        v-model="isDarkMode"
        :scroll-thumb-color="$vuetify.theme.currentTheme.primary"
        :scroll-background-color="$vuetify.theme.currentTheme.background"
      />
      <v-btn
        v-if="!isMdUp"
        class="mx-2"
        icon
        elevation="0"
        depressed
        @click="toogleMenuVisibility"
      >
        <v-icon size="40" :color="$vuetify.theme.currentTheme.background">
          {{ isMenuOpen ? "mdi-close" : "mdi-menu" }}
        </v-icon>
      </v-btn>
    </div>
  </v-system-bar>
</template>


<script lang="ts">
import Vue, { PropOptions } from "vue";
import CustomSwitch from "@/components/CustomSwitch.vue";
import { ButtonOptionsInterface, SectionsRefType } from "~/types/global";

export default Vue.extend({
  components: {
    CustomSwitch,
  },
  props: {
    sectionsRef: {
      type: Object,
      required: true,
    } as PropOptions<SectionsRefType>,
    isMdUp: {
      type: Boolean,
      required: true,
    },
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isDarkMode: false as boolean,
      buttonsOptions: [] as ButtonOptionsInterface[],
    };
  },
  watch: {
    isDarkMode(value) {
      this.toggleThemeMode(value);
    },
  },
  created() {
    this.buttonsOptions = [
      {
        text: "Início",
        handleClick: () => {
          this.sectionsRef.startSection.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
      {
        text: "Sobre mim",
        handleClick: () => {
          this.sectionsRef.aboutMeSection.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
      {
        text: "Habilidades",
        handleClick: () => {
          this.sectionsRef.skillsSection.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
      {
        text: "Projetos",
        handleClick: () => {
          this.sectionsRef.projectsSection.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
      {
        text: "Contatos",
        handleClick: () => {
          this.sectionsRef.contactsSection.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
    ];
  },
  mounted() {
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "light");
    } else {
      const themeLocalStorage = localStorage.getItem("themeMode");
      this.isDarkMode = themeLocalStorage !== "light";
    }
  },
  methods: {
    toggleThemeMode(value: boolean) {
      localStorage.setItem("themeMode", value ? "dark" : "light");
      this.$vuetify.theme.dark = value;
    },
    toogleMenuVisibility() {
      this.$emit("toogleMenuVisibility");
    },
  },
});
</script>

<style lang="scss" scoped>
.v-row {
  height: 100%;
  .button-navigation {
    height: 100%;
    font-size: 27px;
    text-transform: none;
  }
}
.switch-area {
  position: absolute;
  display: flex;
  align-items: center;
  margin-right: 10px;
  right: 0;
}
</style>
