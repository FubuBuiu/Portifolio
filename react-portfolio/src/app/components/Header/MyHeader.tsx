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
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    if (!matches) {
      setOpenDrawer(false);
    }
  }, [matches]);

  function toggleValueNavigation(event: MouseEvent<HTMLElement>, value: any) {
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
        onClose={() => setOpenDrawer(false)}
        variant="persistent"
        sx={{ zIndex: "1100", display: matches ? "inherit" : "none" }}
      >
        <Box pt={"66px"} bgcolor={theme.palette.secondary.main}>
          <List dense disablePadding>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                sx={{ fontSize: 26, textTransform: "none" }}
              >
                Início
              </Button>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                sx={{ fontSize: 26, textTransform: "none" }}
              >
                Sobre mim
              </Button>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                sx={{ fontSize: 26, textTransform: "none" }}
              >
                Habilidades
              </Button>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                sx={{ fontSize: 26, textTransform: "none" }}
              >
                Projetos
              </Button>
            </ListItem>
            <ListItem sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="text"
                sx={{ fontSize: 26, textTransform: "none" }}
              >
                Contatos
              </Button>
            </ListItem>
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
          <Box position={"absolute"} right={0} mr={5}>
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <CustomSwitch onChange={toggleTheme} />
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
