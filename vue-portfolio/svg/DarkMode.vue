<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="40"
    viewBox="0 -960 960 960"
    :width="width"
  >
    <path
      :fill="color"
      d="M480-120q-150.333 0-255.167-104.833Q120-329.667 120-480q0-136 83-232.5t215.666-120.167Q454.333-839 469-817.333q14.666 21.666-1 54.667-11.667 24-17.833 49.666Q444-687.333 444-660q0 90 63 153t153 63q27 0 52.833-6t48.5-16.666q35.667-15.334 57 .5 21.334 15.833 13.667 52.833-22.667 126.667-119.834 210Q615-120 480-120Z"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    color: {
      type: String,
      default: "black",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
});
</script>
