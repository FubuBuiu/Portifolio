import { Box, Stack, Typography } from "@mui/material";
import { CardAboutMe } from "./CardAboutMe";

export function AboutMeSection() {
  return (
    <Box
      sx={{
        padding: 3,
        bgcolor: "secondary.main",
      }}
    >
      {/* TODO Talvez não precise desse Stack */}
      <Stack height={"100%"} textAlign={"center"} alignItems={"center"}>
        <Typography lineHeight={1} variant="h3">
          Sobre mim
        </Typography>
        <CardAboutMe />
      </Stack>
    </Box>
  );
}
