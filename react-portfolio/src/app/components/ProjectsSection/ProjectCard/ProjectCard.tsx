import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import styles from "./styles.module.scss";
import { Project } from "@/app/server/firebase";
import React, { useState } from "react";
import Image from "next/image";
import { CloseIcon } from "@/icons/CloseIcon";
import { LottieFilesIcon } from "@/icons/LottieFilesIcon";
import { TypescriptIcon } from "@/icons/TypescriptIcon";
import { NextIcon } from "@/icons/NextIcon";
import { SassIcon } from "@/icons/SassIcon";
import { MuiIcon } from "@/icons/MuiIcon";
import { CypressIcon } from "@/icons/CypressIcon";
import { JestIcon } from "@/icons/JestIcon";
import { JavascriptIcon } from "@/icons/JavascriptIcon";
import { NuxtIcon } from "@/icons/NuxtIcon";
import { HtmlIcon } from "@/icons/HtmlIcon";
import { CssIcon } from "@/icons/CssIcon";
import { ReactIcon } from "@/icons/ReactIcon";
import { VueIcon } from "@/icons/VueIcon";

enum ToolsEnum {
  VUETIFY = "VUETIFY",
  VUE = "VUE",
  REACT = "REACT",
  HTML = "HTML",
  CSS = "CSS",
  FLUTTER = "FLUTTER",
  CYPRESS = "CYPRESS",
  JEST = "JEST",
  JS = "JS",
  TS = "TS",
  LOTTIE = "LOTTIE",
  SASS = "SASS",
  NUXT = "NUXT",
  NEXT = "NEXT",
  MUI = "MUI",
  STYLED_COMPONENTS = "STYLED_COMPONENTS",
}

export function ProjectCard({
  project,
  deviceMatches,
}: {
  project: Omit<Project, "id">;
  deviceMatches: boolean;
}) {
  const [showDialog, setShowDialog] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const theme = useTheme();

  const handleShowDialog = () => {
    setIsHover(false);
    setShowDialog(!showDialog);
  };

  const handleToolsUsed = () => {
    let toolsList = [];
    const iconHeight = deviceMatches ? 30 : 40;
    for (const tool of project.toolsUsed) {
      switch (tool) {
        case ToolsEnum.HTML:
          toolsList.push(<HtmlIcon key={ToolsEnum.HTML} height={iconHeight} />);
          break;
        case ToolsEnum.CSS:
          toolsList.push(<CssIcon key={ToolsEnum.CSS} height={iconHeight} />);
          break;
        case ToolsEnum.LOTTIE:
          toolsList.push(
            <LottieFilesIcon key={ToolsEnum.LOTTIE} height={iconHeight} />
          );
          break;
        case ToolsEnum.CYPRESS:
          toolsList.push(
            <CypressIcon
              key={ToolsEnum.CYPRESS}
              isLightIcon={theme.palette.mode === "dark"}
              height={iconHeight}
            />
          );
          break;
        case ToolsEnum.NEXT:
          toolsList.push(<NextIcon key={ToolsEnum.NEXT} height={iconHeight} />);
          break;
        case ToolsEnum.NUXT:
          toolsList.push(<NuxtIcon key={ToolsEnum.NUXT} height={iconHeight} />);
          break;
        case ToolsEnum.TS:
          toolsList.push(
            <TypescriptIcon key={ToolsEnum.TS} height={iconHeight} />
          );
          break;
        case ToolsEnum.JS:
          toolsList.push(
            <JavascriptIcon key={ToolsEnum.JS} height={iconHeight} />
          );
          break;
        case ToolsEnum.SASS:
          toolsList.push(<SassIcon key={ToolsEnum.SASS} height={iconHeight} />);
          break;
        case ToolsEnum.MUI:
          toolsList.push(<MuiIcon key={ToolsEnum.MUI} height={iconHeight} />);
          break;
        case ToolsEnum.JEST:
          toolsList.push(<JestIcon key={ToolsEnum.JEST} height={iconHeight} />);
          break;
        case ToolsEnum.VUE:
          toolsList.push(<VueIcon key={ToolsEnum.VUE} height={iconHeight} />);
          break;
        case ToolsEnum.REACT:
          toolsList.push(
            <ReactIcon key={ToolsEnum.REACT} height={iconHeight} />
          );
          break;
        default:
          break;
      }
    }
    return toolsList;
  };

  return (
    <>
      <Typography
        className={styles.titleOffCard}
        textAlign={"center"}
        mb={1}
        variant="h6"
      >
        {project.title}
      </Typography>
      <div className={styles.cardArea}>
        <div className={styles.card} onClick={() => handleShowDialog()}>
          <Typography
            className={styles.titleInsideCard}
            fontSize={28}
            lineHeight={1}
          >
            {project.title}
          </Typography>
          <div
            className={styles.backgroundImage}
            style={{
              backgroundImage: `url(${project.image})`,
            }}
          ></div>
        </div>
        <div className={styles.backlight}></div>
      </div>
      <Dialog
        open={showDialog}
        onClose={handleShowDialog}
        fullScreen={deviceMatches}
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle
          textAlign={"center"}
          variant={"h4"}
          fontSize={deviceMatches ? 30 : undefined}
          position={"relative"}
        >
          {project.title}
          <IconButton
            disableRipple
            onClick={handleShowDialog}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <CloseIcon
              width={deviceMatches ? 35 : 30}
              color={isHover ? theme.palette.primary.main : "#6B6B6B"}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack mb={1} direction={"row"} justifyContent={"center"}>
            <Image
              src={project.image}
              sizes="100vw"
              width={0}
              height={0}
              quality={100}
              style={{ width: "450px", height: "auto" }}
              alt=""
            />
          </Stack>
          <DialogContentText
            sx={{ wordBreak: "break-word" }}
            color={"primary.main"}
          >
            {project.description}
          </DialogContentText>
          <Box mt={2}>
            <Typography>Desenvolvido com:</Typography>
            <Stack direction={"row"} columnGap={1}>
              <>{handleToolsUsed()}</>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            size="large"
            sx={{ textTransform: "none" }}
            target="_blank"
            href={project.gitHubLink}
          >
            Repositório
          </Button>
          {project.link && (
            <Button
              size="large"
              sx={{ textTransform: "none" }}
              target="_blank"
              href={project.link}
            >
              Testar projeto
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
