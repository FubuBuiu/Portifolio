"use client";
import { PaletteMode, Paper } from "@mui/material";
import styles from "./page.module.scss";
import React, { ChangeEvent, useState } from "react";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { MyHeader } from "./components/Header";

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>("light");

  function toggleTheme(event: ChangeEvent<HTMLInputElement>) {
    const isActive = event.target.checked;
    setMode(isActive ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={theme(mode)}>
      <Paper
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <MyHeader toggleTheme={toggleTheme}></MyHeader>
      </Paper>
    </ThemeProvider>
  );
}
