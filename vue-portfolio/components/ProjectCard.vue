<template>
  <div class="cardArea">
    <span class="white--text titleOffCard" style="font-size: 28px">
      {{ project.title }}
    </span>
    <div class="card" @click="handleShowDialog">
      <span class="white--text titleInsideCard" style="font-size: 28px">
        {{ project.title }}
      </span>
      <div
        class="backgroundImage"
        :style="{
          backgroundImage: `url(${project.image})`,
        }"
      ></div>
    </div>
    <div class="primary backlight"></div>
    <v-dialog
      v-model="showDialog"
      width="700"
      :overlay-color="$vuetify.theme.dark ? 'white' : undefined"
      :overlay-opacity="$vuetify.theme.dark ? '0.2' : undefined"
    >
      <v-card
        elevation="0"
        :style="{ backgroundColor: $vuetify.theme.themes[theme].background }"
      >
        <v-card-title
          class="primary--text justify-center"
          style="font-size: 34px; position: relative"
        >
          {{ project.title }}
          <v-btn class="mt-2 mr-2 close-dialog-button" icon>
            <v-icon
              size="30"
              :color="closeButtonColor"
              @mouseover="isMouseOverCloseIcon"
              @mouseleave="isMouseOverCloseIcon"
            >
              mdi-close
            </v-icon>
          </v-btn>
        </v-card-title>
        <v-img class="mx-auto mt-5" :src="project.image" width="500" />
        <v-card-text class="primary--text mt-5" style="font-size: 16px">
          {{ project.description }}
          <v-row class="ma-0 mt-3 pa-0"> Desenvolvido com: </v-row>
          <v-row class="pa-0 ma-0" style="gap: 10px">
            <v-col
              v-for="(icon, index) in toolsUsed"
              :key="index"
              cols="auto"
              class="pa-0 d-flex align-end"
            >
              <component
                :is="icon"
                :height="'35'"
                :font-size="'30'"
                :is-light-icon="$vuetify.theme.dark"
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="text-capitalize"
            style="font-size: 15px"
            color="primary"
            depressed
            large
            target="_blank"
            :href="project.gitHubLink"
          >
            Repositório
          </v-btn>
          <v-btn
            v-if="project.link"
            class="text-capitalize"
            style="font-size: 15px"
            color="primary"
            depressed
            large
            target="_blank"
            :href="project.link"
          >
            Testar projeto
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import NuxtIcon from "@/svg/NuxtIcon.vue";
import VuetifyIcon from "@/svg/VuetifyIcon.vue";
import TypescriptIcon from "@/svg/TypescriptIcon.vue";
import SassIcon from "@/svg/SassIcon.vue";
import LottieIcon from "@/svg/LottieIcon.vue";
import CssIcon from "@/svg/CssIcon.vue";
import CypressIcon from "@/svg/CypressIcon.vue";
import NextIcon from "@/svg/NextIcon.vue";
import ReactIcon from "@/svg/ReactIcon.vue";
import VueIcon from "@/svg/VueIcon.vue";
import FlutterIcon from "@/svg/FlutterIcon.vue";
import HtmlIcon from "@/svg/HtmlIcon.vue";
import MuiIcon from "@/svg/MuiIcon.vue";
import JavascriptIcon from "@/svg/JavascriptIcon.vue";
import StyledComponentsIcon from "@/svg/StyledComponentsIcon.vue";
import JestIcon from "@/svg/JestIcon.vue";
import { Project } from "@/server/firebase";

enum ToolsEnum {
  VUETIFY = "VUETIFY",
  VUE = "VUE",
  REACT = "REACT",
  HTML = "HTML",
  CSS = "CSS",
  FLUTTER = "FLUTTER",
  CYPRESS = "CYPRESS",
  JEST = "JEST",
  JS = "JS",
  TS = "TS",
  LOTTIE = "LOTTIE",
  SASS = "SASS",
  NUXT = "NUXT",
  NEXT = "NEXT",
  MUI = "MUI",
  STYLED_COMPONENTS = "STYLED_COMPONENTS",
}

export default Vue.extend({
  components: {
    NuxtIcon,
    VuetifyIcon,
    TypescriptIcon,
    SassIcon,
    LottieIcon,
    CssIcon,
    CypressIcon,
    NextIcon,
    ReactIcon,
    VueIcon,
    FlutterIcon,
    HtmlIcon,
    MuiIcon,
    JestIcon,
    JavascriptIcon,
    StyledComponentsIcon,
  },
  props: {
    project: {
      type: Object,
      required: true,
    } as PropOptions<Omit<Project, "id">>,
  },
  data() {
    return {
      showDialog: false as boolean,
      isCloseIconOver: false as boolean,
      toolsUsed: [] as Vue.Component[],
    };
  },
  computed: {
    theme(): "light" | "dark" {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
    closeButtonColor(): string {
      return this.isCloseIconOver ? "primary" : "#6B6B6B";
    },
    handleToolsUsed() {
      const toolsList = [];
      for (const tool of this.project.toolsUsed) {
        switch (tool) {
          case ToolsEnum.HTML:
            toolsList.push(HtmlIcon);
            break;
          case ToolsEnum.CSS:
            toolsList.push(CssIcon);
            break;
          case ToolsEnum.LOTTIE:
            toolsList.push(LottieIcon);
            break;
          case ToolsEnum.CYPRESS:
            toolsList.push(CypressIcon);
            break;
          case ToolsEnum.NEXT:
            toolsList.push(NextIcon);
            break;
          case ToolsEnum.NUXT:
            toolsList.push(NuxtIcon);
            break;
          case ToolsEnum.TS:
            toolsList.push(TypescriptIcon);
            break;
          case ToolsEnum.JS:
            toolsList.push(JavascriptIcon);
            break;
          case ToolsEnum.SASS:
            toolsList.push(SassIcon);
            break;
          case ToolsEnum.MUI:
            toolsList.push(MuiIcon);
            break;
          case ToolsEnum.JEST:
            toolsList.push(JestIcon);
            break;
          case ToolsEnum.VUE:
            toolsList.push(VueIcon);
            break;
          case ToolsEnum.REACT:
            toolsList.push(ReactIcon);
            break;
          case ToolsEnum.VUETIFY:
            toolsList.push(VuetifyIcon);
            break;
          case ToolsEnum.FLUTTER:
            toolsList.push(FlutterIcon);
            break;
          case ToolsEnum.STYLED_COMPONENTS:
            toolsList.push(StyledComponentsIcon);
            break;
          default:
            break;
        }
      }
      return toolsList;
    },
  },
  created() {
    this.toolsUsed = this.handleToolsUsed;
  },
  methods: {
    handleShowDialog() {
      this.showDialog = !this.showDialog;
    },
    isMouseOverCloseIcon() {
      this.isCloseIconOver = !this.isCloseIconOver;
    },
  },
});
</script>

<style lang="scss" scoped>
.close-dialog-button {
  position: absolute;
  top: 0;
  right: 0;
}

.titleOffCard {
  display: none;
}
.cardArea {
  width: 460px;
  height: 290px;
  position: relative;
  .backlight {
    width: 100%;
    height: 100%;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.2s linear;
  }
  .card {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .titleInsideCard {
      opacity: 0;
      transition: opacity 0.2s linear;
    }
    .backgroundImage {
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition-property: transform, filter;
      transition-duration: 0.2s;
      transition-timing-function: linear;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover + .backlight {
        opacity: 1;
      }
      &:hover .backgroundImage {
        transform: scale(1.1);
        filter: brightness(50%);
      }
      &:hover .titleInsideCard {
        opacity: 1;
      }
    }
  }
}
@media screen and (max-device-width: 600px) {
  .titleOffCard {
    display: block;
  }
  .cardArea {
    width: 340px;
    height: 210px;
    .backlight {
      animation: lightsPulsing 5s linear infinite;
    }
    .titleInsideCard {
      display: none;
    }
    @keyframes lightsPulsing {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>
