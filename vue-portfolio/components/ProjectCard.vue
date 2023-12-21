<template>
  <v-row class="ma-0 pa-0 justify-center">
    <span class="mb-3 primary--text text-center titleOffCard">
      {{ project.title }}
    </span>
    <div class="cardArea">
      <div class="card" @click="handleShowDialog">
        <span class="white--text titleInsideCard">
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
        :fullscreen="isMobile"
      >
        <v-card
          elevation="0"
          :rounded="isMobile ? '0' : undefined"
          :style="{
            backgroundColor: $vuetify.theme.currentTheme.background,
          }"
        >
          <v-card-title
            ref="cardTitleRef"
            class="primary--text justify-center px-12"
            :style="{
              fontSize: isMobile ? '28px' : '34px',
              position: isMobile ? 'fixed' : 'absolute',
              zIndex: 1,
              width: '100%',
              backgroundColor: $vuetify.theme.currentTheme.background,
            }"
          >
            {{ project.title }}
            <v-btn class="mt-2 mr-2 close-dialog-button" icon>
              <v-icon
                size="30"
                :color="isMobile ? 'primary' : closeButtonColor"
                @mouseover="isMouseOverCloseIcon"
                @mouseleave="isMouseOverCloseIcon"
                @click="handleShowDialog"
              >
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-title>
          <div class="mx-6" style="padding-top: 70px; z-index: 0">
            <v-img
              class="mx-auto"
              :src="project.image"
              :width="isMobile ? undefined : 500"
              eager
            />
          </div>
          <v-card-text
            class="primary--text mt-5 flex-grow-1"
            :style="{
              fontSize: '16px',
              marginBottom: isMobile ? '55px' : undefined,
              paddingBottom: isMobile ? undefined : '65px',
              zIndex: 0,
            }"
          >
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
                  :height="isMobile ? '30' : '35'"
                  :font-size="'30'"
                  :is-light-icon="$vuetify.theme.dark"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions
            class="justify-center"
            :style="{
              position: isMobile ? 'fixed' : 'absolute',
              zIndex: 1,
              bottom: 0,
              width: '100%',
              backgroundColor: $vuetify.theme.currentTheme.background,
            }"
          >
            <v-btn
              class="text-capitalize"
              :style="{
                fontSize: '15px',
                color: $vuetify.theme.currentTheme.background,
              }"
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
              :style="{
                fontSize: '15px',
                color: $vuetify.theme.currentTheme.background,
              }"
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
  </v-row>
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
      isMobile: window.matchMedia("(max-device-width: 600px)").matches,
    };
  },
  computed: {
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
  font-size: 20px;
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
      font-size: 28px;
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
