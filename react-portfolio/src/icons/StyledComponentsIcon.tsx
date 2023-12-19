import { Typography } from "@mui/material";

export function StyledComponentsIcon({
    fontSize = 20,
    isLightIcon = false,
  }: {
    fontSize?: number;
    isLightIcon?: boolean;
  }){
    return(
      <div style={{display:'flex', alignItems: 'center'}}>
        <Typography 
          style={{
          fontSize: `${fontSize}px`,
          lineHeight: 1,
          color: isLightIcon ? 'white' : 'black'}}>
          { "<💅>" }
        </Typography>
      </div>
    )
}