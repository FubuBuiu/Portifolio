import {
  AppBar,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import { CustomSwitch } from "../CustomSwitch";
import { ChangeEvent, MouseEvent, useState } from "react";

type NavigationValueType =
  | "start"
  | "skills"
  | "about-me"
  | "projects"
  | "contacts";

enum NavigationValues {
  START = "start",
  SKILLS = "skills",
  ABOUT_ME = "about-me",
  PROJECTS = "projects",
  CONTACTS = "contacts",
}
const buttonsOptions = [
  { value: NavigationValues.START, text: "Início" },
  { value: NavigationValues.ABOUT_ME, text: "Sobre mim" },
  { value: NavigationValues.SKILLS, text: "Habilidades" },
  { value: NavigationValues.PROJECTS, text: "Projetos" },
  { value: NavigationValues.CONTACTS, text: "Contatos" },
];

export function MyHeader({
  toggleTheme,
}: {
  toggleTheme: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [navigationSelected, setNavigationSelected] =
    useState<NavigationValueType>("start");
  const [oldNavigationValue, setOldNavigationValue] =
    useState<NavigationValueType>(navigationSelected);

  function toggleValueNavigation(event: MouseEvent<HTMLElement>, value: any) {
    if (value) {
      setNavigationSelected(value);
      setOldNavigationValue(value);
    } else {
      setNavigationSelected(oldNavigationValue);
    }
  }

  return (
    <AppBar
      sx={{
        height: "66px",
      }}
      position="fixed"
      elevation={0}
      enableColorOnDark
    >
      <Toolbar
        sx={{
          height: "100%",
          justifyContent: "center",
        }}
      >
        <ToggleButtonGroup
          exclusive
          sx={{ height: "100%" }}
          value={navigationSelected}
          onChange={toggleValueNavigation}
        >
          {buttonsOptions.map((button) => (
            <ToggleButton
              key={button.value}
              sx={{ textTransform: "none", fontSize: 27 }}
              value={button.value}
            >
              {button.text}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <CustomSwitch
          sx={{ position: "absolute", right: 0, mr: "35px" }}
          onChange={toggleTheme}
        />
      </Toolbar>
    </AppBar>
  );
}
