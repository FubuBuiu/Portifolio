import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Typography } from "@mui/material";
import typescriptAnimation from "@/lottie-animations/typescriptWalking.json";
import cypressAnimation from '@/lottie-animations/cypressWalking.json'
import htmlAnimation from '@/lottie-animations/htmlWalking.json'
import flutterAnimation from '@/lottie-animations/flutterWalking.json'
import cssAnimation from '@/lottie-animations/cssWalking.json'
import javascriptAnimation from '@/lottie-animations/javascriptWalking.json'
import jestAnimation from '@/lottie-animations/jestWalking.json'
import lottieAnimation from '@/lottie-animations/lottieWalking.json'
import muiAnimation from '@/lottie-animations/muiWalking.json'
import nextAnimation from '@/lottie-animations/nextWalking.json'
import nuxtAnimation from '@/lottie-animations/nuxtWalking.json'
import reactAnimation from '@/lottie-animations/reactWalking.json'
import sassAnimation from '@/lottie-animations/sassWalking.json'
import styledComponentsAnimation from '@/lottie-animations/styledComponentsWalking.json'
import vuetifyAnimation from '@/lottie-animations/vuetifyWalking.json'
import vueAnimation from '@/lottie-animations/vueWalking.json'
import styles from "./styles.module.scss";

const animationList = [
  htmlAnimation,cssAnimation,javascriptAnimation,typescriptAnimation,vueAnimation,vuetifyAnimation,nuxtAnimation,reactAnimation,muiAnimation,nextAnimation,styledComponentsAnimation,sassAnimation,jestAnimation,cypressAnimation,lottieAnimation,flutterAnimation]

export function SkillsSection({ deviceMatches }: { deviceMatches: boolean }) {
  return (
    <Box
      height={"500px"}
      width={"100%"}
      padding={3}
      position={"relative"}
      overflow={"hidden"}
    >
      <Typography
        textAlign={"center"}
        lineHeight={1}
        variant="h3"
        fontSize={deviceMatches ? 40 : undefined}
      >
        Habilidades
      </Typography>
      <Box height={'100%'} display={'flex'} alignItems={'center'}>
        <div className={styles.animationsContainer}>
          {animationList.toReversed().map((animation,index)=>(
              <Player
              key={index}
                autoplay
                loop
                src={animation}
                style={{  height: deviceMatches
                  ? '120px' :'150px',width: deviceMatches ? '150px' : '170px' }}
              />
          ))}
        </div>
      </Box>
    </Box>
  );
}
