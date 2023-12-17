<template>
  <div v-bind="$attrs">
    <div
      class="secondary my-navigation-drawer"
      :style="{
        transform: show ? 'translateY(0px)' : 'translateY(-280px)',
      }"
    >
      <v-row
        v-for="button in buttonsOptions"
        :key="button.text"
        justify="center"
      >
        <v-btn
          class="primary--text"
          :style="{
            fontSize: '27px',
            textTransform: 'none',
          }"
          x-large
          elevation="0"
          color="transparent"
          tile
          @click="
            () => {
              button.handleClick();
              toogleDrawerVisibility();
            }
          "
        >
          {{ button.text }}
        </v-btn>
      </v-row>
    </div>
    <div
      class="backdrop-drawer"
      :style="{
        visibility: show ? 'visible' : 'hidden',
      }"
      @click="toogleDrawerVisibility"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { ButtonOptionsInterface, SectionsRefType } from "~/types/global";

export default Vue.extend({
  props: {
    sectionsRef: {
      type: Object,
      required: true,
    } as PropOptions<SectionsRefType>,
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      buttonsOptions: [] as ButtonOptionsInterface[],
    };
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
    toogleDrawerVisibility() {
      this.$emit("toogleVisibility");
    },
  },
});
</script>

<style lang="scss" scoped>
.my-navigation-drawer {
  z-index: 3;
  position: absolute;
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  transition: transform 0.2s ease;
}
.backdrop-drawer {
  position: absolute;
  bottom: 0;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
