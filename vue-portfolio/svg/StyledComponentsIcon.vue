<template>
  <span
    :style="{
      fontSize: `${fontSize}px`,
      lineHeight: 1,
      color: isLightIcon ? 'white' : 'black',
    }"
    >{{ "<💅>" }}</span
  >
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    fontSize: {
      type: String,
      default: undefined,
    },
    isLightIcon: { type: Boolean, default: false },
  },
});
</script>
