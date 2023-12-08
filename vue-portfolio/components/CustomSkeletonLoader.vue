<template>
  <div>
    <div
      class="grey mb-4 mx-auto rounded-pill overflow-hidden position-relative opacity title"
    >
      <div class="loading-effect"></div>
    </div>
    <div class="grey rounded position-relative overflow-hidden opacity card">
      <div class="loading-effect"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}
.opacity {
  opacity: 0.3;
}

.title {
  width: 50%;
  height: 20px;
  display: none;
}

.card {
  width: 460px;
  height: 290px;
}
.loading-effect {
  position: absolute;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgb(255, 255, 255) 50%,
    transparent 100%
  );
  width: 30%;
  height: 100%;
  animation: myAnimation 1.5s linear infinite;
}
@keyframes myAnimation {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}
@media screen and (max-device-width: 600px) {
  .title {
    display: block;
  }
}
</style>
