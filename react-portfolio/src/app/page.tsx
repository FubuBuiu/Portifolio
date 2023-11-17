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
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { MyHeader } from "./components/Header";
import { NextIcon } from "@/icons/NextIcon";
import { TypescriptIcon } from "@/icons/TypescriptIcon";
import { SassIcon } from "@/icons/SassIcon";
import { LottieFilesIcon } from "@/icons/LottieFilesIcon";
import { MuiIcon } from "@/icons/MuiIcon";
import { CustomScrollbar } from "./components/CustomScrollbar";
import { CardAboutMe } from "./components/AboutMeSection/CardAboutMe";
import { Player } from "@lottiefiles/react-lottie-player";

import { ProjectCard } from "./components/ProjectsSection/ProjectCard";
import { SectionRefType } from "./components/Header/MyHeader";
import { Project, getProjects } from "./services/firebase";
import { StartSection } from "./components/StartSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactsSection } from "./components/ContactsSection";

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

  function toggleTheme(event: ChangeEvent<HTMLInputElement>) {
    const isActive = event.target.checked;
    setMode(isActive ? "dark" : "light");
  }

  //TODO Rever a responsividade do site todo para mobile
  return (
    <ThemeProvider theme={theme(mode)}>
      <MyHeader toggleTheme={toggleTheme} sectionRefs={sectionRefs} />
      <CustomScrollbar>
        <Paper>
          <section ref={startSectionRef}>
            <StartSection />
          </section>
          <section ref={aboutMeSectionRef}>
            <AboutMeSection />
          </section>
          <section ref={skillsSectionRef}>
            <SkillsSection />
          </section>
          <section ref={projectsSectionRef}>
            <ProjectsSection />
          </section>
          <section ref={contactsSectionRef}>
            <ContactsSection />
          </section>
        </Paper>
      </CustomScrollbar>
    </ThemeProvider>
  );
}
