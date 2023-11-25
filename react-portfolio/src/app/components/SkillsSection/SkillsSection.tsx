import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Typography } from "@mui/material";
import airplaneAnimationOne from "@/lottie-animations/airplane1.json";
import airplaneAnimationTwo from "@/lottie-animations/airplane2.json";
import styles from "./styles.module.scss";

export function SkillsSection({ deviceMatches }: { deviceMatches: boolean }) {
  return (
    <Box
      height={"700px"}
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
      <div className={styles.airplaneOneContainer}>
        <Player
          autoplay
          loop
          src={airplaneAnimationOne}
          style={{ width: "100%" }}
        />
      </div>
      <div className={styles.airplaneTwoContainer}>
        <Player
          autoplay
          loop
          src={airplaneAnimationTwo}
          style={{ width: "100%" }}
        />
      </div>
    </Box>
  );
}
