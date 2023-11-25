import { Box, Typography } from "@mui/material";
import { CardAboutMe } from "./CardAboutMe";

export function AboutMeSection({ deviceMatches }: { deviceMatches: boolean }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={3}
      bgcolor={"secondary.main"}
    >
      <Typography
        lineHeight={1}
        textAlign={"center"}
        variant="h3"
        fontSize={deviceMatches ? 38 : undefined}
      >
        Sobre mim
      </Typography>
      <CardAboutMe />
    </Box>
  );
}
