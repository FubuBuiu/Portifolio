import React, { CSSProperties } from "react";
import Image from "next/image";
import {
  Box,
  Card,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./styles.module.scss";
import meBlue from "../../images/me_blue.png";

const CARD_FIELD_INFORMATIONS = [
  { title: "Nome", text: "Brendon Angelo" },
  { title: "Data de nascimento", text: "23/06/1999" },
  { title: "Área de atuação", text: "Front-end" },
  { title: "Formado em", text: "Ciência da Computação" },
];

export function CardAboutMe() {
  const matches = useMediaQuery("(max-width: 900px)");

  return (
    <div className={styles.card}>
      <div className={styles.reflectionEffect}>
        {Array.from(Array(3)).map((_, index) => {
          return (
            <div
              key={index}
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className={styles.reflection1}
                style={{ marginLeft: index === 0 ? -100 : 100 }}
              ></div>
              <div
                className={styles.reflection2}
                style={{ marginLeft: 8 }}
              ></div>
              <div
                className={styles.reflection1}
                style={{ marginLeft: 20 }}
              ></div>
              <div
                className={styles.reflection2}
                style={{ marginLeft: 8 }}
              ></div>
              <div
                className={styles.reflection3}
                style={{ marginLeft: 200 }}
              ></div>
              <div
                className={styles.reflection3}
                style={{ marginLeft: 40 }}
              ></div>
              <div
                className={styles.reflection3}
                style={{ marginLeft: 40 }}
              ></div>
              <div
                className={styles.reflection4}
                style={{ marginLeft: 100 }}
              ></div>
              <div
                className={styles.reflection3}
                style={{ marginLeft: 5 }}
              ></div>
              <div
                className={styles.reflection4}
                style={{ marginLeft: 5 }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className={styles.cardContent}>
        <Grid container columnSpacing={{ xs: matches ? 2 : 5 }}>
          <Grid item xs={matches ? 6 : 3.5}>
            <Card
              elevation={0}
              sx={{
                width: "100%",
                height: "fit-content",
                bgcolor: "secondary.main",
                border: "9px solid",
                borderColor: "secondary.main",
                borderRadius: 3,
                display: "flex",
                alignItems: "end",
              }}
            >
              <Image
                style={{ width: "100%", height: "auto" }}
                src={meBlue}
                alt="Me blue"
              />
            </Card>
          </Grid>
          <Grid item xs={matches ? 6 : 8.5}>
            <Grid container spacing={1}>
              {CARD_FIELD_INFORMATIONS.map((value, index) => {
                return (
                  <Grid key={index} item xs={matches ? 12 : 6}>
                    <Box
                      bgcolor={"secondary.main"}
                      padding={"8px 0 8px 8px"}
                      borderRadius={2}
                    >
                      <Stack textAlign={"start"}>
                        <Typography
                          lineHeight={1}
                          marginBottom={"5px"}
                          variant={matches ? "subtitle1" : "subtitle1"}
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          lineHeight={1}
                          variant={matches ? "h6" : "h6"}
                        >
                          {value.text}
                        </Typography>
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
              <Grid item display={matches ? "none" : "block"}>
                {/* TODO COMPONENTIZAR A SESSÃO DE Descrição DO CARD */}
                <Box bgcolor={"secondary.main"} padding={1} borderRadius={2}>
                  <Stack textAlign={"start"}>
                    <Typography
                      lineHeight={1}
                      marginBottom={"5px"}
                      variant="subtitle1"
                    >
                      Descrição
                    </Typography>
                    <Typography lineHeight={"25px"} variant="h6">
                      Desde a infância, minha paixão por ilustrações e cores me
                      conduziu à criação digital. Hoje, como desenvolvedor
                      front-end, combino design com habilidades em{" "}
                      <span className={styles.javascriptColor}>JavaScript</span>
                      ,{" "}
                      <span className={styles.typescriptColor}>TypeScript</span>
                      ,<span className={styles.htmlColor}> HTML</span>,
                      <span className={styles.cssColor}> CSS</span>,{" "}
                      <span className={styles.sassColor}>SASS</span>,{" "}
                      <span className={styles.styledComponentColor}>
                        Styled Components
                      </span>
                      , <span className={styles.vueColor}>Vue.js</span> e React
                      para criar experiências web envolventes. Acredito na
                      colaboração entre design e código para cativar os
                      usuários, e estou em constante busca de aprimoramento.
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container marginTop={1} display={matches ? "block" : "none"}>
          <Grid item xs={12}>
            <Box
              bgcolor={"secondary.main"}
              height={"100%"}
              paddingLeft={1}
              borderRadius={2}
            >
              <Stack alignItems={"start"}>
                <Typography variant="subtitle1">Descrição</Typography>
                <Typography
                  lineHeight={"25px"}
                  variant="h6"
                  textAlign={"initial"}
                >
                  Desde a infância, minha paixão por ilustrações e cores me
                  conduziu à criação digital. Hoje, como desenvolvedor
                  front-end, combino design com habilidades em{" "}
                  <span className={styles.javascriptColor}>JavaScript</span>,{" "}
                  <span className={styles.typescriptColor}>TypeScript</span>,
                  <span className={styles.htmlColor}> HTML</span>,
                  <span className={styles.cssColor}> CSS</span>,{" "}
                  <span className={styles.sassColor}>SASS</span>,{" "}
                  <span className={styles.styledComponentColor}>
                    Styled Components
                  </span>
                  , <span className={styles.vueColor}>Vue.js</span> e React para
                  criar experiências web envolventes. Acredito na colaboração
                  entre design e código para cativar os usuários, e estou em
                  constante busca de aprimoramento.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
