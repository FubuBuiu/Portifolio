<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <v-system-bar class="toolbar" color="primary" height="66" elevation="0">
      <v-row v-if="isMdUp" class="v-row" justify="center">
        <v-btn
          v-for="button in buttonsOptions"
          :key="button.text"
          class="button-navigation contrastText--text"
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
          :scroll-thumb-color="$vuetify.theme.themes[theme].primary"
          :scroll-background-color="$vuetify.theme.themes[theme].background"
        />
        <v-btn
          v-if="!isMdUp"
          class="mx-2"
          icon
          elevation="0"
          depressed
          @click="toggleMenuVisibility"
        >
          <v-icon size="40" :color="$vuetify.theme.themes[theme].background">
            {{ showMenu ? "mdi-close" : "mdi-menu" }}
          </v-icon>
        </v-btn>
      </div>
    </v-system-bar>
    <div
      v-if="!isMdUp"
      class="primaryDark my-navigation-drawer"
      :style="{
        transform: showMenu ? 'translateY(0px)' : 'translateY(-280px)',
      }"
    >
      <v-row
        v-for="button in buttonsOptions"
        :key="button.text"
        justify="center"
      >
        <v-btn
          :style="{
            fontSize: '27px',
            textTransform: 'none',
            color: $vuetify.theme.themes[theme].contrastText,
          }"
          x-large
          elevation="0"
          color="transparent"
          tile
          @click="
            () => {
              button.handleClick();
              toggleMenuVisibility();
            }
          "
        >
          {{ button.text }}
        </v-btn>
      </v-row>
    </div>
  </div>
</template>


<script lang="ts">
import Vue, { PropOptions } from "vue";

interface ButtonOptionsInterface {
  text: string;
  handleClick: () => void;
}

export interface SectionsRefType {
  startSection: HTMLDivElement;
  aboutMeSection: HTMLDivElement;
  skillsSection: HTMLDivElement;
  projectsSection: HTMLDivElement;
  contactsSection: HTMLDivElement;
}

export default Vue.extend({
  props: {
    sectionsRef: {
      type: Object,
      required: true,
    } as PropOptions<SectionsRefType>,
    isMdUp: {
      type: Boolean,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isDarkMode: false as boolean,
      showMenu: false as boolean,
      buttonsOptions: [] as ButtonOptionsInterface[],
    };
  },
  computed: {
    theme(): "light" | "dark" {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  watch: {
    isDarkMode(value) {
      this.toggleThemeMode(value);
    },
  },
  mounted() {
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "light");
    } else {
      const themeLocalStorage = localStorage.getItem("themeMode");
      this.isDarkMode = themeLocalStorage !== "light";
    }
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
  methods: {
    toggleMenuVisibility() {
      this.showMenu = !this.showMenu;
    },
    toggleThemeMode(value: boolean) {
      localStorage.setItem("themeMode", value ? "dark" : "light");
      this.$vuetify.theme.dark = value;
    },
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  z-index: 2;
  position: relative;
}
.my-navigation-drawer {
  z-index: 1;
  position: absolute;
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: transform 0.2s ease;
  background-color: red;
}
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
