import { Skeleton, Stack, Typography, useTheme } from "@mui/material";

const lightModeColor = "#00A2BE";
const darkModeColor = "#535353";

export function LoadingComponent({
  deviceMatches,
}: {
  deviceMatches: boolean;
}) {
  const theme = useTheme();
  return deviceMatches ? (
    <Stack display={"flex"} flexDirection={"column"} alignItems={" center"}>
      <Typography variant="h6">
        <Skeleton
          width={200}
          sx={{
            bgcolor:
              theme.palette.mode === "light" ? lightModeColor : darkModeColor,
          }}
        />
      </Typography>
      <Skeleton
        sx={{
          bgcolor:
            theme.palette.mode === "light" ? lightModeColor : darkModeColor,
        }}
        width={340}
        height={210}
        variant="rectangular"
      />
    </Stack>
  ) : (
    <Skeleton
      sx={{
        bgcolor:
          theme.palette.mode === "light" ? lightModeColor : darkModeColor,
      }}
      width={460}
      height={290}
      variant="rectangular"
    />
  );
}
