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
          variant: "contained",
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
          square: true,
        },
      },
      MuiSwitch: {
        defaultProps: {
          disableRipple: true,
        },
      },
      // TODO Ver se não fica melhor deixar essa customização no componente
      MuiToggleButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            border: "none",
            borderRadius: 0,
            "&.Mui-selected, &.Mui-selected:hover ": {
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.primary.dark,
            },
          }),
        },
      },
    },
    typography: {
      fontFamily: themeSettings["font-family"],
    },
  });
