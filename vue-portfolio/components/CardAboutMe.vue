<template>
  <div class="primary card">
    <div class="reflectionEffect">
      <div
        v-for="(_, index) in Array.from(Array(3))"
        :key="index"
        :style="{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      >
        <div
          class="reflection1"
          :style="{ marginLeft: index === 0 ? -100 : 100 }"
        ></div>
        <div class="reflection2" :style="{ marginLeft: '8px' }"></div>
        <div class="reflection1" :style="{ marginLeft: '20px' }"></div>
        <div class="reflection2" :style="{ marginLeft: '8px' }"></div>
        <div class="reflection3" :style="{ marginLeft: '200px' }"></div>
        <div class="reflection3" :style="{ marginLeft: '40px' }"></div>
        <div class="reflection3" :style="{ marginLeft: '40px' }"></div>
        <div class="reflection4" :style="{ marginLeft: '100px' }"></div>
        <div class="reflection3" :style="{ marginLeft: '5px' }"></div>
        <div class="reflection4" :style="{ marginLeft: '5px' }"></div>
      </div>
    </div>
    <div class="cardContent">
      <v-row class="ma-0 pa-0 flex-direction spacing">
        <v-col class="pa-0" cols="auto">
          <v-card
            flat
            class="pa-0 rounded-lg"
            :style="{
              border: `9px solid ${$vuetify.theme.themes[theme].secondary}`,
              backgroundColor: $vuetify.theme.themes[theme].secondary,
              width: 'fit-content',
            }"
          >
            <v-img :src="image" :width="breakpoint900 ? '154' : '193'" eager />
          </v-card>
        </v-col>
        <v-col class="ma-0 pa-0">
          <v-row class="pa-0 ma-0 margin-bottom flex-direction spacing">
            <v-col class="ma-0 pa-0">
              <v-card
                class="pl-2 py-2 rounded-lg"
                :style="{
                  height: '100%',
                  backgroundColor: $vuetify.theme.themes[theme].secondary,
                }"
                flat
              >
                <v-card-subtitle
                  class="pa-0 mb-1 primary--text font-size-subtitle"
                  style="line-height: 1"
                >
                  Nome
                </v-card-subtitle>
                <v-card-text
                  class="primary--text font-size-text pa-0"
                  style="line-height: 1"
                >
                  Brendon Angelo
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="ma-0 pa-0">
              <v-card
                class="pl-2 py-2 rounded-lg"
                :style="{
                  height: '100%',
                  backgroundColor: $vuetify.theme.themes[theme].secondary,
                }"
                flat
              >
                <v-card-subtitle
                  class="pa-0 mb-1 primary--text font-size-subtitle"
                  style="line-height: 1"
                >
                  Data de nascimento
                </v-card-subtitle>
                <v-card-text
                  class="primary--text font-size-text pa-0"
                  style="line-height: 1"
                >
                  23/06/1999
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="pa-0 ma-0 margin-bottom flex-direction spacing">
            <v-col class="ma-0 pa-0">
              <v-card
                class="pl-2 py-2 rounded-lg"
                :style="{
                  height: '100%',
                  backgroundColor: $vuetify.theme.themes[theme].secondary,
                }"
                flat
              >
                <v-card-subtitle
                  class="pa-0 mb-1 primary--text font-size-subtitle"
                  style="line-height: 1"
                >
                  Área de atuação
                </v-card-subtitle>
                <v-card-text
                  class="primary--text font-size-text pa-0"
                  style="line-height: 1"
                >
                  Front-end
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="ma-0 pa-0">
              <v-card
                class="pl-2 py-2 rounded-lg"
                :style="{
                  height: '100%',
                  backgroundColor: $vuetify.theme.themes[theme].secondary,
                }"
                flat
              >
                <v-card-subtitle
                  class="pa-0 mb-1 primary--text font-size-subtitle"
                  style="line-height: 1"
                >
                  Formado em
                </v-card-subtitle>
                <v-card-text
                  class="primary--text font-size-text pa-0"
                  style="line-height: 1"
                >
                  Ciência da Computação
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row v-if="!breakpoint900" class="pa-0 ma-0">
            <v-card
              class="pl-2 py-2 rounded-lg"
              :style="{
                height: '100%',
                backgroundColor: $vuetify.theme.themes[theme].secondary,
              }"
              flat
            >
              <v-card-subtitle
                class="pa-0 mb-1 primary--text font-size-subtitle"
                style="line-height: 1"
              >
                Descrição
              </v-card-subtitle>
              <v-card-text
                class="primary--text font-size-text pa-0"
                style="line-height: 25px"
              >
                Desde a infância, minha paixão por ilustrações e cores me
                conduziu à criação digital. Hoje, como desenvolvedor front-end,
                combino design com habilidades em
                <span class="javascriptColor">JavaScript</span>,
                <span class="typescriptColor">TypeScript</span>,
                <span class="htmlColor">HTML</span>,
                <span class="cssColor"> CSS</span>,
                <span class="sassColor">SASS</span>,
                <span class="styledComponentColor">Styled Components</span>,
                Vue.js e <span class="reactColor">React</span> para criar
                experiências web envolventes. Acredito na colaboração entre
                design e código para cativar os usuários, e estou em constante
                busca de aprimoramento.
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-if="breakpoint900" class="ma-0 pa-0">
        <v-card
          class="pl-2 py-2 rounded-lg"
          :style="{
            height: '100%',
            backgroundColor: $vuetify.theme.themes[theme].secondary,
          }"
          flat
        >
          <v-card-subtitle
            class="pa-0 mb-1 primary--text font-size-subtitle"
            style="line-height: 1"
          >
            Descrição
          </v-card-subtitle>
          <v-card-text
            class="primary--text font-size-text pa-0"
            style="line-height: 25px"
          >
            Desde a infância, minha paixão por ilustrações e cores me conduziu à
            criação digital. Hoje, como desenvolvedor front-end, combino design
            com habilidades em
            <span class="javascriptColor">JavaScript</span>,
            <span class="typescriptColor">TypeScript</span>,
            <span class="htmlColor">HTML</span>,
            <span class="cssColor"> CSS</span>,
            <span class="sassColor">SASS</span>,
            <span class="styledComponentColor">Styled Components</span>, Vue.js
            e <span class="reactColor">React</span> para criar experiências web
            envolventes. Acredito na colaboração entre design e código para
            cativar os usuários, e estou em constante busca de aprimoramento.
          </v-card-text>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import image from "@/images/me_green.png";

export default Vue.extend({
  data() {
    return {
      image,
    };
  },
  computed: {
    breakpoint900(): boolean {
      return this.$vuetify.breakpoint.width <= 900;
    },
    theme(): "light" | "dark" {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
});
</script>

<style lang="scss" scoped>
@mixin reflections-default-properties {
  height: 140%;
  background-color: white;
  opacity: 0.9;
  rotate: 35deg;
}

.spacing {
  row-gap: 8px;
  column-gap: 15px;
}

.htmlColor {
  color: #e44d26;
}
.javascriptColor {
  color: #f7df1e;
}
.reactColor {
  color: #00dbfb;
}
.typescriptColor,
.cssColor {
  color: #046fe5;
}
.styledComponentColor,
.sassColor {
  color: #cf649a;
}

.font-size-subtitle {
  font-size: 16px;
}
.font-size-text {
  font-size: 20px;
}

.margin-bottom {
  margin-bottom: 8px !important;
}
.card {
  width: 900px;
  height: auto;
  margin-top: 50px;
  z-index: 0;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  .cardContent {
    width: 100%;
    height: 100%;
    padding: 40px;
  }
  .reflectionEffect {
    z-index: -1;
    width: 180%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    opacity: 0.6;
    animation: moveRightLeft 10s ease-in-out infinite;
    .reflection1 {
      width: 15px;
      @include reflections-default-properties();
    }
    .reflection2 {
      width: 10px;
      @include reflections-default-properties();
    }
    .reflection3 {
      width: 10px;
      @include reflections-default-properties();
    }
    .reflection4 {
      width: 5px;
      @include reflections-default-properties();
    }
  }
}

@keyframes moveRightLeft {
  0%,
  100% {
    left: -90%;
  }
  20% {
    left: -90%;
  }
  50% {
    left: 20%;
  }
  70% {
    left: 20%;
  }
}

@media screen and (max-width: 900px) {
  .card {
    width: 400px;
    margin-top: 30px;
    .cardContent {
      padding: 20px;
    }
    .reflectionEffect {
      animation: moveRightLeft2 10s ease-in-out infinite;
    }
  }
  @keyframes moveRightLeft2 {
    0%,
    100% {
      left: -330%;
    }
    20% {
      left: -330%;
    }
    50% {
      left: 20%;
    }
    70% {
      left: 20%;
    }
  }
  @media screen and (max-device-width: 399px) {
    .card {
      width: 100%;
    }
    .flex-direction {
      flex-direction: column !important;
      align-items: center;
    }
  }
}
</style>
