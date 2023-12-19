"use client";
import { PaletteMode, Paper, useMediaQuery } from "@mui/material";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { MyHeader } from "./components/Header";
import { CustomScrollbar } from "./components/CustomScrollbar";
import { SectionRefType } from "./components/Header/MyHeader";
import { StartSection } from "./components/StartSection";
import { AboutMeSection } from "./components/AboutMeSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactsSection } from "./components/ContactsSection";

export type refType = null | HTMLElement;

export default function Home() {
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const deviceMatches = useMediaQuery("(max-device-width: 600px)");
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
    var mode: PaletteMode;
    if (isActive) {
      mode = "dark";
    } else {
      mode = "light";
    }
    setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  }

  useEffect(() => {
    if (!localStorage.getItem("themeMode")) {
      localStorage.setItem("themeMode", "light");
    }
    const themeLocalStorage = localStorage.getItem("themeMode");
    setThemeMode(themeLocalStorage as PaletteMode);
  }, []);

  return (
    <ThemeProvider theme={theme(themeMode!)}>
      <MyHeader toggleTheme={toggleTheme} sectionRefs={sectionRefs} />
      <CustomScrollbar>
        <Paper sx={{backgroundColor: 'background.default'}}>
          <section ref={startSectionRef}>
            <StartSection deviceMatches={deviceMatches} />
          </section>
          <section ref={aboutMeSectionRef}>
            <AboutMeSection deviceMatches={deviceMatches} />
          </section>
          <section ref={skillsSectionRef}>
            <SkillsSection deviceMatches={deviceMatches} />
          </section>
          <section ref={projectsSectionRef}>
            <ProjectsSection deviceMatches={deviceMatches} />
          </section>
          <section ref={contactsSectionRef}>
            <ContactsSection deviceMatches={deviceMatches} />
          </section>
        </Paper>
      </CustomScrollbar>
    </ThemeProvider>
  );
}
