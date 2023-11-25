import { LottieFilesIcon } from "@/icons/LottieFilesIcon";
import { MuiIcon } from "@/icons/MuiIcon";
import { NextIcon } from "@/icons/NextIcon";
import { SassIcon } from "@/icons/SassIcon";
import { TypescriptIcon } from "@/icons/TypescriptIcon";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import reactLogoAnimation from "@/lottie-animations/react-logo.json";

export function StartSection({ deviceMatches }: { deviceMatches: boolean }) {
  const matches400 = useMediaQuery("(max-device-width: 400px)");
  return (
    <Box
      minHeight={"calc(100vh - 66px)"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      textAlign={"center"}
      alignItems={"center"}
      padding={3}
    >
      <Typography
        variant="h4"
        marginTop={deviceMatches ? 0 : 5}
        fontSize={matches400 ? 30 : undefined}
      >
        Este portfólio foi feito em React
      </Typography>
      <Player
        src={reactLogoAnimation}
        autoplay
        keepLastFrame
        style={{ height: matches400 ? 250 : 300 }}
      />
      <Typography variant="h3">+</Typography>
      <Stack
        marginTop={8}
        height={"100%"}
        direction={"row"}
        justifyContent={"center"}
        spacing={"50px"}
        useFlexGap
        flexWrap={"wrap"}
      >
        <NextIcon height={deviceMatches ? 65 : 80} />
        <MuiIcon height={deviceMatches ? 65 : 80} />
        <TypescriptIcon height={deviceMatches ? 65 : 80} />
        <SassIcon height={deviceMatches ? 65 : 80} />
        <LottieFilesIcon height={deviceMatches ? 65 : 80} />
      </Stack>
    </Box>
  );
}
