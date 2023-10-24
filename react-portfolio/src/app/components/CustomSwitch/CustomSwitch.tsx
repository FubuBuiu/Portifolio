import { styled } from "@mui/material/styles";
import { Switch, SwitchProps } from "@mui/material";

const MySwitch = styled(Switch)(({ theme }) => ({
  width: 70,
  height: 35,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    marginTop: 1.5,
    padding: 0,
    transform: "translateX(3px)",
    "&.Mui-checked": {
      transform: "translateX(35px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="23"><path fill="${encodeURIComponent(
          theme.palette.background.default
        )}" d="M480-120q-150.333 0-255.167-104.833Q120-329.667 120-480q0-136 83-232.5t215.666-120.167Q454.333-839 469-817.333q14.666 21.666-1 54.667-11.667 24-17.833 49.666Q444-687.333 444-660q0 90 63 153t153 63q27 0 52.833-6t48.5-16.666q35.667-15.334 57 .5 21.334 15.833 13.667 52.833-22.667 126.667-119.834 210Q615-120 480-120Z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.background.default,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.primary.main,
    width: 32,
    height: 32,
    boxShadow: "none",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 -960 960 960"><path fill="${encodeURIComponent(
        theme.palette.background.default
      )}" d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM73.333-435.927q-18.5 0-31.286-12.82-12.787-12.82-12.787-31.37t12.787-31.253q12.786-12.703 31.286-12.703h93.334q18.5 0 31.286 12.82 12.787 12.82 12.787 31.37t-12.787 31.253q-12.786 12.703-31.286 12.703H73.333Zm720 0q-18.5 0-31.286-12.82-12.787-12.82-12.787-31.37t12.787-31.253q12.786-12.703 31.286-12.703h93.334q18.5 0 31.286 12.82 12.787 12.82 12.787 31.37t-12.787 31.253q-12.786 12.703-31.286 12.703h-93.334ZM479.883-749.26q-18.55 0-31.253-12.787-12.703-12.786-12.703-31.286v-93.334q0-18.5 12.82-31.286 12.82-12.787 31.37-12.787t31.253 12.787q12.703 12.786 12.703 31.286v93.334q0 18.5-12.82 31.286-12.82 12.787-31.37 12.787Zm0 720q-18.55 0-31.253-12.787-12.703-12.786-12.703-31.286v-93.334q0-18.5 12.82-31.286 12.82-12.787 31.37-12.787t31.253 12.787q12.703 12.786 12.703 31.286v93.334q0 18.5-12.82 31.286-12.82 12.787-31.37 12.787ZM227.797-669.898l-52.334-51.334q-13.203-12.869-12.789-31.272.414-18.402 12.72-32.102 12.946-13.134 31.16-13.134t31.649 13.203l51.899 52.334q12.203 13.015 12.109 30.776-.095 17.761-12.109 30.63-12.58 12.87-30.841 13.268-18.261.399-31.464-12.369Zm494 494.435-51.899-52.334q-12.203-13.015-12.203-30.91t12.537-30.83q12.536-13.203 30.652-13.036 18.116.167 31.319 13.036l52.334 50.769q13.203 12.869 12.789 31.272-.414 18.402-12.72 32.102-12.946 13.134-31.16 13.134t-31.649-13.203Zm-51.334-494.435q-13.203-12.87-13.036-30.986.167-18.116 13.036-31.319l50.769-52.334q12.869-13.203 31.272-12.789 18.402.414 32.102 12.72 13.134 12.946 13.134 31.16t-13.203 31.649l-52.334 51.899q-12.348 12.203-30.351 12.109-18.004-.095-31.389-12.109ZM175.394-175.394q-13.134-12.946-13.134-31.16t13.203-31.649l52.334-51.899q12.881-12.869 30.593-12.869t30.886 12.869q13.464 12.87 13.297 30.986-.167 18.116-13.036 31.319l-50.769 52.334q-12.869 13.203-31.272 12.789-18.402-.414-32.102-12.72Z" /></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.background.default,
    borderRadius: "100px",
  },
}));

export function CustomSwitch(props: SwitchProps) {
  return (
    <>
      <MySwitch {...props} />
    </>
  );
}
