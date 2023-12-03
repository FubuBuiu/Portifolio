<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 81 81"
    fill="none"
  >
    <g clip-path="url(#clip0_152_374)">
      <path
        d="M73.8411 0.380127H6.73406C3.14047 0.380127 0.227295 3.29331 0.227295 6.8869V74.2038C0.227295 77.7974 3.14047 80.7106 6.73406 80.7106H73.8411C77.4347 80.7106 80.3478 77.7974 80.3478 74.2038V6.8869C80.3478 3.29331 77.4347 0.380127 73.8411 0.380127Z"
        fill="url(#paint0_linear_152_374)"
      />
      <path
        d="M61.2795 16.188C63.4772 16.5135 64.9941 18.5617 64.6698 20.7618C64.3454 22.9625 62.3011 24.4843 60.1027 24.1586C56.2099 23.5819 50.3781 29.644 43.849 42.1088C35.5137 58.0217 27.7554 65.6035 19.5875 64.9985C17.3718 64.8343 15.7097 62.9022 15.8732 60.6842C16.0367 58.4658 17.9646 56.7989 20.1807 56.9631C24.2141 57.2619 30.1387 50.9415 36.7262 38.3652C45.1148 22.3505 52.9784 14.9581 61.2795 16.188Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_152_374"
        x1="21.1294"
        y1="828.131"
        x2="7655.14"
        y2="5802.98"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2BEAED" />
        <stop offset="1" stop-color="#0FCCCE" />
      </linearGradient>
      <clipPath id="clip0_152_374">
        <rect
          width="80"
          height="80"
          fill="white"
          transform="translate(0.428467 0.5)"
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
