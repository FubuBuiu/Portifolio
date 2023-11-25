import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project, getProjects } from "@/app/server/firebase";
import { LoadingComponent } from "../LoadingComponent";

export function ProjectsSection({ deviceMatches }: { deviceMatches: boolean }) {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const x = await getProjects();
      setLoading(false);
      return setProjects(x);
    };
    fetchData();
  }, []);

  return (
    <Box padding={3} bgcolor={"secondary.main"}>
      <Typography
        lineHeight={1}
        variant="h3"
        fontSize={deviceMatches ? 40 : undefined}
        textAlign={"center"}
      >
        Projetos
      </Typography>
      <Grid
        container
        marginTop={5}
        direction={"row"}
        gap={3}
        justifyContent={"center"}
      >
        {loading ? (
          <Grid>
            <LoadingComponent deviceMatches={deviceMatches} />
          </Grid>
        ) : (
          projects.map((project) => (
            <Grid key={project.id}>
              <ProjectCard project={project} deviceMatches={deviceMatches} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
