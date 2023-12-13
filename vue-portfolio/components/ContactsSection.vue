<template>
  <v-container class="ma-0 pa-6" fluid>
    <v-row
      class="primary--text ma-0 pa-0 justify-center"
      style="font-size: 48px; line-height: 1"
      >Contatos</v-row
    >
    <v-row class="pa-0 ma-0">
      <v-container
        class="pa-0 ma-0 d-flex align-center"
        style="height: 400px"
        fluid
      >
        <v-row
          class="pa-0 ma-0 justify-center align-center"
          :style="{ gap: '50px' }"
        >
          <v-col class="pa-0" cols="auto">
            <v-container
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @mouseenter="startAnimation('insta')"
              @mouseleave="stopAnimation('insta')"
              @click="goToInsta"
            >
              <lottie-vue-player
                ref="insta"
                loop
                :src="insta"
                class="insta"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col class="pa-0" cols="auto">
            <v-container
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @mouseenter="startAnimation('linkedin')"
              @mouseleave="stopAnimation('linkedin')"
              @click="goToLinkedin"
            >
              <lottie-vue-player
                ref="linkedin"
                loop
                :src="linkedin"
                class="linkedin"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <v-container
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @mouseenter="startAnimation('gitHub')"
              @mouseleave="stopAnimation('gitHub')"
              @click="goToGitHub"
            >
              <lottie-vue-player
                ref="gitHub"
                loop
                :src="gitHub"
                class="gitHub"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <v-tooltip v-model="showEmailTooltip" color="primary" top>
              <template #activator>
                <v-container
                  class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
                  @mouseenter="startAnimation('email')"
                  @mouseleave="stopAnimation('email')"
                  @click="showToolTip"
                >
                  <lottie-vue-player
                    ref="email"
                    loop
                    :src="email"
                    class="email"
                    style="background-color: transparent"
                  />
                </v-container>
              </template>
              <span :style="{ fontSize: '20px' }"> Email copiado </span>
            </v-tooltip>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <v-container
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @mouseenter="startAnimation('whatsApp')"
              @mouseleave="stopAnimation('whatsApp')"
              @click="goToWhatsApp"
            >
              <lottie-vue-player
                ref="whatsApp"
                loop
                :src="whatsApp"
                class="whatsApp"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import instagramAnimation from "@/lottie-animations/insta.json";
import linkedinAnimation from "@/lottie-animations/linkedin.json";
import gitHubAnimation from "@/lottie-animations/gitHub.json";
import emailAnimation from "@/lottie-animations/email.json";
import whatsAppAnimation from "@/lottie-animations/whatsApp.json";
export default Vue.extend({
  data() {
    return {
      insta: JSON.stringify(instagramAnimation),
      linkedin: JSON.stringify(linkedinAnimation),
      gitHub: JSON.stringify(gitHubAnimation),
      email: JSON.stringify(emailAnimation),
      whatsApp: JSON.stringify(whatsAppAnimation),
      showEmailTooltip: false as boolean,
    };
  },
  methods: {
    showToolTip() {
      this.showEmailTooltip = true;
      navigator.clipboard.writeText("brendonangelo@hotmail.com");
      setTimeout(() => (this.showEmailTooltip = false), 2000);
    },
    startAnimation(ref: string) {
      (this.$refs[ref] as any).togglePlayPause();
    },
    stopAnimation(ref: string) {
      (this.$refs[ref] as any).stop();
    },
    goToInsta() {
      window.open("https://www.instagram.com/fubu_buiu/", "_blank");
    },
    goToLinkedin() {
      window.open(
        "https://www.linkedin.com/in/brendon-angelo-rodrigues/",
        "_blank"
      );
    },
    goToGitHub() {
      window.open("https://github.com/FubuBuiu", "_blank");
    },
    goToWhatsApp() {
      window.open(
        "https://api.whatsapp.com/send/?phone=5579999958631",
        "_blank"
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.animationContainer {
  width: 90px;
  height: 90px;
  transition-property: width, height;
  transition-duration: 0.2s;
  transition-timing-function: linear;
  cursor: pointer;
  .insta,
  .linkedin,
  .gitHub,
  .email,
  .whatsApp {
    transition: transform 0.13s linear;
  }
  .insta {
    width: 100px;
  }
  .linkedin {
    width: 80px;
  }
  .gitHub {
    width: 78px;
  }
  .email {
    width: 120px;
  }
  .whatsApp {
    width: 75px;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      width: 150px;
      height: 150px;
      .insta,
      .linkedin,
      .gitHub,
      .email,
      .whatsApp {
        transform: scale(1.3);
      }
    }
  }
  @media screen and (max-device-width: 600px) {
    .insta {
      width: 90px;
    }
    .linkedin {
      width: 65px;
    }
    .gitHub {
      width: 68px;
    }
    .email {
      width: 110px;
    }
    .whatsApp {
      width: 65px;
    }
  }
}
</style>
