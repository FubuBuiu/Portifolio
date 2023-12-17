<template>
  <v-container class="ma-0 pa-6" fluid>
    <v-row class="primary--text title-section ma-0 pa-0 justify-center"
      >Contatos</v-row
    >
    <v-row class="pa-0 ma-0">
      <v-container
        class="pa-0 ma-0 d-flex align-center"
        style="height: 300px"
        fluid
      >
        <v-row class="pa-0 ma-0 justify-center align-center" style="gap: 35px">
          <v-col class="pa-0 d-flex" cols="auto">
            <v-container
              ref="instaContainer"
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @click="goToInsta"
            >
              <lottie-vue-player
                ref="insta"
                :autoplay="isMobile"
                loop
                :src="insta"
                class="insta"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col class="pa-0 d-flex" cols="auto">
            <v-container
              ref="linkedinContainer"
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @click="goToLinkedin"
            >
              <lottie-vue-player
                ref="linkedin"
                :autoplay="isMobile"
                loop
                :src="linkedin"
                class="linkedin"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col cols="auto" class="pa-0 d-flex">
            <v-container
              ref="gitHubContainer"
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @click="goToGitHub"
            >
              <lottie-vue-player
                ref="gitHub"
                :autoplay="isMobile"
                loop
                :src="gitHub"
                class="gitHub"
                style="background-color: transparent"
              />
            </v-container>
          </v-col>
          <v-col cols="auto" class="pa-0 d-flex">
            <CustomTooltip :text="'Email copiado'" :show="showEmailTooltip">
              <v-container
                ref="emailContainer"
                class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
                style="position: relative"
                @click="showToolTip"
              >
                <lottie-vue-player
                  ref="email"
                  :autoplay="isMobile"
                  loop
                  :src="email"
                  class="email"
                  style="background-color: transparent"
                />
              </v-container>
            </CustomTooltip>
          </v-col>
          <v-col cols="auto" class="pa-0">
            <v-container
              ref="whatsAppContainer"
              class="pa-0 ma-0 d-flex justify-center align-center overflow-hidden animationContainer"
              @click="goToWhatsApp"
            >
              <lottie-vue-player
                ref="whatsApp"
                :autoplay="isMobile"
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
      show: false,
      insta: JSON.stringify(instagramAnimation),
      linkedin: JSON.stringify(linkedinAnimation),
      gitHub: JSON.stringify(gitHubAnimation),
      email: JSON.stringify(emailAnimation),
      whatsApp: JSON.stringify(whatsAppAnimation),
      showEmailTooltip: false as boolean,
      contacts: ["insta", "linkedin", "gitHub", "email", "whatsApp"],
      isMobile: window.matchMedia("(max-device-width: 600px)").matches,
    };
  },
  mounted() {
    if (!this.isMobile) {
      this.contacts.forEach((contact) => {
        (this.$refs[`${contact}Container`] as HTMLDivElement)?.addEventListener(
          "mouseenter",
          () => {
            this.startAnimation(contact);
          }
        );
        (this.$refs[`${contact}Container`] as HTMLDivElement)?.addEventListener(
          "mouseleave",
          () => {
            this.stopAnimation(contact);
          }
        );
      });
    }
  },
  beforeDestroy() {
    this.contacts.forEach((contact) => {
      (this.$refs[`${contact}Container`] as HTMLDivElement).removeEventListener(
        "mouseenter",
        () => {
          this.startAnimation(contact);
        }
      );
      (this.$refs[`${contact}Container`] as HTMLDivElement).removeEventListener(
        "mouseleave",
        () => {
          this.stopAnimation(contact);
        }
      );
    });
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
.title-section {
  line-height: 1;
  font-size: 48px;
}
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
    width: 65px;
    height: 65px;
    .insta {
      width: 75px;
    }
    .linkedin {
      width: 55px;
    }
    .gitHub {
      width: 58px;
    }
    .email {
      width: 90px;
    }
    .whatsApp {
      width: 55px;
    }
  }
}
@media screen and (max-device-width: 600px) {
  .title-section {
    font-size: 38px;
  }
}
</style>
