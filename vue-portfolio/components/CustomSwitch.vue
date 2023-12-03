<template>
  <span class="toggle-wrapper" @click="toggle">
    <span class="toggle-background" :style="backgroundStyles" />
    <span class="toggle-thumb" :style="thumbStyles">
      <DarkModeSvg v-if="value" :color="scrollBackgroundColor" :width="'22'" />
      <LightModeSvg v-else :color="scrollBackgroundColor" :width="'22'" />
    </span>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import LightModeSvg from "@/svg/LightMode.vue";
import DarkModeSvg from "@/svg/DarkMode.vue";
export default Vue.extend({
  components: {
    LightModeSvg,
    DarkModeSvg,
  },
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    scrollThumbColor: { type: String, default: "#666666" },
    scrollBackgroundColor: { type: String, default: "#c2c2c2" },
  },
  computed: {
    backgroundStyles() {
      return {
        backgroundColor: this.scrollBackgroundColor,
      };
    },
    thumbStyles() {
      return {
        backgroundColor: this.scrollThumbColor,
        transform: this.value ? "translateX(30px)" : "translateX(0)",
      };
    },
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    },
  },
});
</script>

<style lang="scss" scoped>
.toggle-wrapper {
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 70px;
  height: 35px;
  border-radius: 9999px;
  &:focus {
    outline: 0;
  }
  .toggle-background {
    display: inline-block;
    border-radius: 9999px;
    height: 100%;
    width: 100%;
    transition: background-color 0.4s ease;
  }

  .toggle-thumb {
    position: absolute;
    height: 32px;
    width: 32px;
    left: 4px;
    bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c2c2c2;
    border-radius: 9999px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease;
  }
}
</style>
