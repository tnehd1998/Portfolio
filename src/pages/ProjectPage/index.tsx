import React from "react";
import { useRecoilValue } from "recoil";
import Project from "../../components/Project";
import { projectsState, teamProjectsState } from "../../store/project";
import { Wrapper, Category } from "./styles";

const ProjectPage = () => {
  const teamProjects = useRecoilValue(teamProjectsState);
  const projects = useRecoilValue(projectsState);

  return (
    <Wrapper>
      <Category>팀 프로젝트</Category>
      {teamProjects.map((project, index) => (
        <Project
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          period={project.period}
          descriptions={project.descriptions}
          projectLink={project.projectLink}
          hashtags={project.hashtags}
        />
      ))}
      <Category>개인 프로젝트</Category>
      {projects.map((project, index) => (
        <Project
          key={index}
          imageUrl={project.imageUrl}
          title={project.title}
          period={project.period}
          descriptions={project.descriptions}
          projectLink={project.projectLink}
          hashtags={project.hashtags}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectPage;
