"use client";
import {
  Box,
  Fade,
  Grid,
  PaletteMode,
  Paper,
  Popper,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./page.module.scss";
import React, { ChangeEvent, useRef, useState } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { MyHeader } from "./components/Header";
import { NextIcon } from "@/icons/NextIcon";
import { TypescriptIcon } from "@/icons/TypescriptIcon";
import { SassIcon } from "@/icons/SaasIcon";
import { LottieFilesIcon } from "@/icons/LottieFilesIcon";
import { MuiIcon } from "@/icons/MuiIcon";
import { CustomScrollbar } from "./components/CustomScrollbar";
import { CardAboutMe } from "./components/CardAboutMe";
import { Player } from "@lottiefiles/react-lottie-player";
import airplaneAnimationOne from "./lottie-animations/airplane1.json";
import airplaneAnimationTwo from "./lottie-animations/airplane2.json";
import reactLogoAnimation from "./lottie-animations/react-logo.json";
import emailAnimation from "./lottie-animations/email.json";
import gitHubAnimation from "./lottie-animations/gitHub.json";
import linkedinAnimation from "./lottie-animations/linkedin.json";
import instaAnimation from "./lottie-animations/insta.json";
import whatsappAnimation from "./lottie-animations/whatsapp.json";
import { ProjectCard } from "./components/ProjectCard";
import { SectionRefType } from "./components/Header/MyHeader";

export type refType = null | HTMLElement;

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const matches = useMediaQuery("(max-device-width: 400px)");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const startSectionRef = useRef<refType>(null);
  const aboutMeSectionRef = useRef<refType>(null);
  const skillsSectionRef = useRef<refType>(null);
  const projectsSectionRef = useRef<refType>(null);
  const contactsSectionRef = useRef<refType>(null);

  const sectionRefs: SectionRefType = {
    startRef: startSectionRef,
    aboutMeRef: aboutMeSectionRef,
    skillsRef: skillsSectionRef,
    projectRef: projectsSectionRef,
    contactsRef: contactsSectionRef,
  };

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

  function toggleTheme(event: ChangeEvent<HTMLInputElement>) {
    const isActive = event.target.checked;
    setMode(isActive ? "dark" : "light");
  }
  //TODO Rever a responsividade do site todo para mobile
  // TODO Componentizar cada section
  return (
    <ThemeProvider theme={theme(mode)}>
      <MyHeader toggleTheme={toggleTheme} sectionRefs={sectionRefs} />
      <CustomScrollbar>
        <Paper>
          <section ref={startSectionRef}>
            <Box
              minHeight={"calc(100vh - 66px)"}
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              textAlign={"center"}
              alignItems={"center"}
              padding={3}
            >
              <Typography variant="h4" marginTop={5}>
                Este portfólio foi feito em React
              </Typography>
              <Player
                src={reactLogoAnimation}
                autoplay
                keepLastFrame
                style={{ height: matches ? 130 : 300 }}
              />
              <Typography variant="h3">+</Typography>
              <Stack
                marginTop={8}
                height={"100%"}
                direction={"row"}
                justifyContent={"center"}
                spacing={"50px"}
                useFlexGap
                flexWrap={"wrap"}
              >
                <NextIcon height={matches ? 65 : 80} />
                <MuiIcon height={matches ? 65 : 80} />
                <TypescriptIcon height={matches ? 65 : 80} />
                <SassIcon height={matches ? 65 : 80} />
                <LottieFilesIcon height={matches ? 65 : 80} />
              </Stack>
            </Box>
          </section>
          <section ref={aboutMeSectionRef}>
            <Box
              sx={{
                padding: 3,
                bgcolor: "secondary.main",
              }}
            >
              {/* TODO Talvez não precise desse Stack */}
              <Stack height={"100%"} textAlign={"center"} alignItems={"center"}>
                <Typography lineHeight={1} variant="h3">
                  Sobre mim
                </Typography>
                <CardAboutMe />
              </Stack>
            </Box>
          </section>
          <section ref={skillsSectionRef}>
            <Box
              height={"700px"}
              width={"100%"}
              padding={3}
              position={"relative"}
              overflow={"hidden"}
            >
              <Typography textAlign={"center"} lineHeight={1} variant="h3">
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
          </section>
          <section ref={projectsSectionRef}>
            <Box padding={3} bgcolor={"secondary.main"}>
              <Typography lineHeight={1} variant="h3" textAlign={"center"}>
                Projetos
              </Typography>
              <Grid
                container
                marginTop={2}
                direction={"row"}
                columnSpacing={2}
                rowSpacing={2}
                justifyContent={"center"}
              >
                <Grid item>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item>
                  <ProjectCard></ProjectCard>
                </Grid>
                <Grid item>
                  <ProjectCard></ProjectCard>
                </Grid>
              </Grid>
            </Box>
          </section>
          <section ref={contactsSectionRef}>
            <Box
              height={500}
              padding={3}
              display={"flex"}
              flexDirection={"column"}
            >
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
                // rowSpacing={0}
                justifyContent={"center"}
                alignItems={"center"}
                height={"100%"}
              >
                <Grid item>
                  <div
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/fubu_buiu/")
                    }
                    className={styles.animationContainer}
                  >
                    <Player
                      loop
                      hover
                      src={instaAnimation}
                      className={styles.insta}
                    />
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
          </section>
        </Paper>
      </CustomScrollbar>
    </ThemeProvider>
  );
}
