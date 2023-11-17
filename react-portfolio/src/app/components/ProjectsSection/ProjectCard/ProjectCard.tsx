import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styles from "./styles.module.scss";
import { Project } from "@/app/services/firebase";
import { useState } from "react";
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
  title,
  image,
  description,
  gitHubLink,
  link,
  toolsUsed,
}: Omit<Project, "id">) {
  const [showDialog, setShowDialog] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery("(max-width: 600px)");

  const handleShowDialog = () => setShowDialog(!showDialog);

  const handleToolsUsed = () => {
    let toolsList = [];
    const iconHeight = 40;
    for (const tool of toolsUsed) {
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
        default:
          break;
      }
    }
    return toolsList;
  };
  return (
    <>
      <div className={styles.cardArea}>
        <div className={styles.card} onClick={() => handleShowDialog()}>
          <Typography className={styles.title} fontSize={28} lineHeight={1}>
            {title}
          </Typography>
          <div
            className={styles.backgroundImage}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
        <div className={styles.backlight}></div>
      </div>
      <Dialog
        open={showDialog}
        onClose={handleShowDialog}
        // fullWidth
        // maxWidth={false}
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle textAlign={"center"} position={"relative"}>
          <span>{title}</span>
          {/* TODO Tentar trocar a cor do icone do botão para azul quando mouse estiver por cima do botão */}
          <IconButton
            disableRipple
            onClick={handleShowDialog}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <CloseIcon width={25} color={"#6B6B6B"} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack mb={3} direction={"row"} justifyContent={"center"}>
            <Image
              src={image}
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
            {description}
          </DialogContentText>
          <Box my={3}>
            <Typography>Desenvolvido com:</Typography>
            <Stack direction={"row"} columnGap={1}>
              <>{handleToolsUsed()}</>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            sx={{ textTransform: "none" }}
            target="_blank"
            href={gitHubLink}
          >
            Repositório
          </Button>
          {link && (
            <Button sx={{ textTransform: "none" }} target="_blank" href={link}>
              Testar projeto
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
