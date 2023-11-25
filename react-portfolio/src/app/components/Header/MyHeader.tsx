import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CustomSwitch } from "../CustomSwitch";
import React, {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useState,
} from "react";
import { refType } from "@/app/page";
import { MenuIcon } from "@/icons/MenuIcon";
import { CloseIcon } from "@/icons/CloseIcon";

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

export interface SectionRefType {
  startRef: MutableRefObject<refType>;
  aboutMeRef: MutableRefObject<refType>;
  skillsRef: MutableRefObject<refType>;
  projectRef: MutableRefObject<refType>;
  contactsRef: MutableRefObject<refType>;
}

export function MyHeader({
  toggleTheme,
  sectionRefs,
}: {
  toggleTheme: (event: ChangeEvent<HTMLInputElement>) => void;
  sectionRefs: SectionRefType;
}) {
  const [navigationSelected, setNavigationSelected] =
    useState<NavigationValueType>("start");
  const [oldNavigationValue, setOldNavigationValue] =
    useState<NavigationValueType>(navigationSelected);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    if (!matches) {
      setOpenDrawer(false);
    }
  }, [matches]);

  const buttonsOptions = [
    {
      value: NavigationValues.START,
      text: "Início",
      handleClick: () => {
        sectionRefs.startRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      value: NavigationValues.ABOUT_ME,
      text: "Sobre mim",
      handleClick: () => {
        sectionRefs.aboutMeRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      value: NavigationValues.SKILLS,
      text: "Habilidades",
      handleClick: () => {
        sectionRefs.skillsRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      value: NavigationValues.PROJECTS,
      text: "Projetos",
      handleClick: () => {
        sectionRefs.projectRef.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      value: NavigationValues.CONTACTS,
      text: "Contatos",
      handleClick: () => {
        sectionRefs.contactsRef.current!.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];

  function toggleValueNavigation(value: any) {
    if (value) {
      setNavigationSelected(value);
      setOldNavigationValue(value);
    } else {
      setNavigationSelected(oldNavigationValue);
    }
  }

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(!openDrawer)}
        sx={{ zIndex: "1100", display: matches ? "inherit" : "none" }}
      >
        <Box pt={"66px"} bgcolor={theme.palette.secondary.main}>
          <List dense disablePadding>
            {buttonsOptions.map((button) => (
              <ListItem
                key={button.value}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="text"
                  onClick={() => {
                    button.handleClick();
                    setOpenDrawer(!openDrawer);
                  }}
                  sx={{ fontSize: 26, textTransform: "none" }}
                >
                  {button.text}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar
        sx={{
          height: "66px",
          zIndex: "1200",
        }}
        position="fixed"
        elevation={0}
        enableColorOnDark
      >
        <Toolbar
          sx={{
            height: "100%",
            position: "relative",
            justifyContent: "center",
          }}
        >
          <ToggleButtonGroup
            exclusive
            sx={{ height: "100%", display: matches ? "none" : "inherit" }}
            onChange={toggleValueNavigation}
          >
            {buttonsOptions.map((button) => (
              <ToggleButton
                key={button.value}
                onClick={button.handleClick}
                sx={{ textTransform: "none", fontSize: 27 }}
                value={button.value}
              >
                {button.text}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Box position={"absolute"} right={0} mr={2}>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <CustomSwitch
                onChange={toggleTheme}
                checked={theme.palette.mode === "dark" ? true : false}
              />
              {matches ? (
                openDrawer ? (
                  <IconButton
                    sx={{ m: 0, p: 0 }}
                    onClick={() => setOpenDrawer(false)}
                  >
                    <CloseIcon
                      color={theme.palette.background.default}
                      width={40}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{ m: 0, p: 0 }}
                    onClick={() => setOpenDrawer(true)}
                  >
                    <MenuIcon
                      color={theme.palette.background.default}
                      width={40}
                    />
                  </IconButton>
                )
              ) : undefined}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
