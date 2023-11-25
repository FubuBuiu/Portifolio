import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Fade, Grid, Tooltip, Typography } from "@mui/material";
import emailAnimation from "@/lottie-animations/email.json";
import gitHubAnimation from "@/lottie-animations/gitHub.json";
import linkedinAnimation from "@/lottie-animations/linkedin.json";
import instaAnimation from "@/lottie-animations/insta.json";
import whatsappAnimation from "@/lottie-animations/whatsapp.json";
import styles from "./styles.module.scss";

export function ContactsSection({ deviceMatches }: { deviceMatches: boolean }) {
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
        fontSize={deviceMatches ? 40 : undefined}
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
        position={"relative"}
      >
        <Grid item>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/fubu_buiu/", "_blank")
            }
            className={styles.animationContainer}
          >
            {/* Tentei usar a variável "deviceMatches" no "autoplay" para alterar a condição para iniciar a animação mas não funciona. Essa foi a solução que achei.  */}
            <Player
              loop
              autoplay
              src={instaAnimation}
              className={styles.insta}
              style={{ display: deviceMatches ? "block" : "none" }}
            />
            <Player
              loop
              hover
              src={instaAnimation}
              className={styles.insta}
              style={{ display: deviceMatches ? "none" : "block" }}
            />
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/brendon-angelo-rodrigues/",
                "_blank"
              )
            }
            className={styles.animationContainer}
          >
            <Player
              loop
              autoplay
              src={linkedinAnimation}
              className={styles.linkedin}
              style={{ display: deviceMatches ? "block" : "none" }}
            />
            <Player
              loop
              hover
              src={linkedinAnimation}
              className={styles.linkedin}
              style={{ display: deviceMatches ? "none" : "block" }}
            />
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={() => window.open("https://github.com/FubuBuiu", "_blank")}
            className={styles.animationContainer}
          >
            <Player
              loop
              autoplay
              src={gitHubAnimation}
              className={styles.gitHub}
              style={{ display: deviceMatches ? "block" : "none" }}
            />
            <Player
              loop
              hover
              src={gitHubAnimation}
              className={styles.gitHub}
              style={{ display: deviceMatches ? "none" : "block" }}
            />
          </div>
        </Grid>
        <Grid item>
          <Tooltip
            title={
              <Typography
                sx={{
                  fontSize: deviceMatches ? 15 : 20,
                  color: "background.default",
                }}
              >
                Email copiado
              </Typography>
            }
            placement="top"
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
                autoplay
                src={emailAnimation}
                className={styles.email}
                style={{ display: deviceMatches ? "block" : "none" }}
              />
              <Player
                loop
                hover
                src={emailAnimation}
                className={styles.email}
                style={{ display: deviceMatches ? "none" : "block" }}
              />
            </div>
          </Tooltip>
        </Grid>
        <Grid item>
          <div
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=5579999958631",
                "_blank"
              )
            }
            className={styles.animationContainer}
          >
            <Player
              loop
              autoplay
              src={whatsappAnimation}
              className={styles.whatsapp}
              style={{ display: deviceMatches ? "block" : "none" }}
            />
            <Player
              loop
              hover
              src={whatsappAnimation}
              className={styles.whatsapp}
              style={{ display: deviceMatches ? "none" : "block" }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
