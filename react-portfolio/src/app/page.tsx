"use client";
import { Box, Button, PaletteMode, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import styles from "./page.module.scss";
import { useState } from "react";
import { theme } from "./theme/theme";

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>("light");

  return (
    <ThemeProvider theme={theme(mode)}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
        }}
      ></Paper>
    </ThemeProvider>
  );
}
