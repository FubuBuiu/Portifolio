import { PaletteMode, createTheme } from "@mui/material";
import themeSettings from "./theme.module.scss";

export const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: themeSettings["primary-main-color"],
              dark: themeSettings["primary-dark-color"],
              contrastText: themeSettings["contrast-text-light-mode-color"],
            },
            secondary: {
              main: themeSettings["secundary-light-mode-color"],
            },
            text: {
              primary: themeSettings["text-primary-color"],
            },
            background: {
              default: themeSettings["background-light-mode-color"],
            },
          }
        : {
            primary: {
              main: themeSettings["primary-main-color"],
              dark: themeSettings["primary-dark-color"],
              contrastText: themeSettings["contrast-text-dark-mode-color"],
            },
            secondary: {
              main: themeSettings["secundary-dark-mode-color"],
            },
            text: {
              primary: themeSettings["text-primary-color"],
            },
            background: {
              default: themeSettings["background-dark-mode-color"],
            },
          }),
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
          square: true,
        },
      },
    },
    typography: {
      fontFamily: themeSettings["font-family"],
    },
  });
