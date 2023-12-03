<template>
 <svg
      xmlns="http://www.w3.org/2000/svg"
      :width='width'
      :height='height'
      viewBox="0 0 566 642"
      fill="none"
    >
      <path
        d="M565.67 0.822266L514.167 577.797L282.654 641.979L51.78 577.886L0.32959 0.822266H565.67Z"
        fill="#E44D26"
      />
      <path
        d="M283 592.92L470.074 541.057L514.085 48.0044H283V592.92Z"
        fill="#F16529"
      />
      <path
        d="M182.878 189.556H283V118.781H105.531L124.62 332.805H283V262.03H189.347L182.878 189.556ZM198.829 368.193H127.782L137.697 479.32L282.674 519.564L283 519.475V445.839L282.69 445.921L203.869 424.638L198.829 368.193Z"
        fill="#EBEBEB"
      />
      <path
        d="M282.756 332.805H369.907L361.69 424.594L282.754 445.899V519.53L427.847 479.32L445.544 281.035L447.27 262.03H282.756V332.805ZM282.756 189.556H453.71L460.046 118.781H282.756V189.556Z"
        fill="white"
      />
    </svg>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    width: {
      type: String,
      default: undefined,
    },
    height: {
      type: String,
      default: undefined,
    },
  },
});
</script>
