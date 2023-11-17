import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project, getProjects } from "@/app/services/firebase";

export function ProjectsSection() {
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const x = await getProjects();
      return setProjects(x);
    };
    fetchData();
  }, []);

  return (
    <Box padding={3} bgcolor={"secondary.main"}>
      <Typography lineHeight={1} variant="h3" textAlign={"center"}>
        Projetos
      </Typography>
      <Grid
        container
        marginTop={2}
        direction={"row"}
        columnSpacing={2}
        rowSpacing={2}
        justifyContent={"center"}
      >
        {projects.map((project) => (
          <Grid key={project.id}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
