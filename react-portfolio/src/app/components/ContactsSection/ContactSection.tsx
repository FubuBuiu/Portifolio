import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Fade, Grid, Tooltip, Typography } from "@mui/material";
import emailAnimation from "@/lottie-animations/email.json";
import gitHubAnimation from "@/lottie-animations/gitHub.json";
import linkedinAnimation from "@/lottie-animations/linkedin.json";
import instaAnimation from "@/lottie-animations/insta.json";
import whatsappAnimation from "@/lottie-animations/whatsapp.json";
import styles from "./styles.module.scss";

export function ContactsSection() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const toogleTooltipVisibility = () => {
    if (!isTooltipOpen) {
      navigator.clipboard.writeText("brendonangelo@hotmail.com");
      setIsTooltipOpen(!isTooltipOpen);
    } else {
      setTimeout(() => {
        setIsTooltipOpen(!isTooltipOpen);
      }, 2000);
    }
  };
  return (
    <Box height={500} padding={3} display={"flex"} flexDirection={"column"}>
      <Typography
        lineHeight={1}
        width={"100%"}
        variant="h3"
        textAlign={"center"}
      >
        Contatos
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 4 }}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100%"}
      >
        <Grid item>
          <div
            onClick={() =>
              (window.location.href = "https://www.instagram.com/fubu_buiu/")
            }
            className={styles.animationContainer}
          >
            <Player loop hover src={instaAnimation} className={styles.insta} />
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/brendon-angelo-rodrigues/")
            }
            className={styles.animationContainer}
          >
            <Player
              loop
              hover
              src={linkedinAnimation}
              className={styles.linkedin}
            />
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={() =>
              (window.location.href = "https://github.com/FubuBuiu")
            }
            className={styles.animationContainer}
          >
            <Player
              loop
              hover
              src={gitHubAnimation}
              className={styles.gitHub}
            />
          </div>
        </Grid>
        <Grid item>
          <Tooltip
            title="Email copiado"
            placement="bottom"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            open={isTooltipOpen}
            onClose={toogleTooltipVisibility}
          >
            <div
              onClick={toogleTooltipVisibility}
              className={styles.animationContainer}
            >
              <Player
                loop
                hover
                src={emailAnimation}
                className={styles.email}
              />
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <div
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send/?phone=5579999958631")
            }
            className={styles.animationContainer}
          >
            <Player
              loop
              hover
              src={whatsappAnimation}
              className={styles.whatsapp}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
