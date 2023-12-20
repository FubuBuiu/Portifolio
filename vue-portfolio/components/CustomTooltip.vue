<template>
  <div class="tooltip-container d-flex justify-center">
    <div
      class="primary tooltip"
      :style="{ opacity: tooltipOpacity, color: textColor }"
    >
      {{ text }}
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: "white",
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    tooltipOpacity(): number {
      return this.show ? 1 : 0;
    },
  },
});
</script>
<style lang="scss" scoped>
.tooltip-container {
  position: relative;
  .tooltip {
    white-space: nowrap;
    position: absolute;
    text-align: center;
    top: -45px;
    padding: 5px;
    opacity: 0;
    border-radius: 5px;
    font-size: 17px;
    transition: opacity 0.3s;
  }
}
@media screen and (max-device-width: 600px) {
  .tooltip-container {
    .tooltip {
      top: -35px;
      font-size: 13px;
    }
  }
}
</style>
