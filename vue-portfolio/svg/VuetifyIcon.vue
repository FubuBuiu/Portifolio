<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 92 81"
    fill="none"
  >
    <g clip-path="url(#clip0_319_1483)">
      <path
        d="M46.6827 18.3679L28.4531 50.2463L45.7145 80.4429L68.5768 40.4715L91.4287 0.5H56.8958L46.6827 18.3679Z"
        fill="#1697F6"
      />
      <path
        d="M22.8623 40.4714L24.0596 42.5735L41.1125 12.7447L48.1192 0.5H45.7142H0L22.8623 40.4714Z"
        fill="#AEDDFF"
      />
      <path
        d="M56.8958 0.5C65.5368 29.2042 45.7145 80.4429 45.7145 80.4429L28.4531 50.2463L56.8958 0.5Z"
        fill="#1867C0"
      />
      <path
        d="M48.1193 0.5C11.7125 0.5 24.0598 42.5735 24.0598 42.5735L48.1193 0.5Z"
        fill="#7BC6FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_319_1483">
        <rect
          width="91.4285"
          height="80"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
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
