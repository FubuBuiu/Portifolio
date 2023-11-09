import { Typography } from "@mui/material";
import styles from "./styles.module.scss";
import image from "../../../images/projectImage.png";
export function ProjectCard() {
  return (
    <div className={styles.cardArea}>
      <div className={styles.card}>
        <Typography className={styles.title} fontSize={28} lineHeight={1}>
          TITULO
        </Typography>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        ></div>
      </div>
      <div className={styles.backlight}></div>
    </div>
  );
}
