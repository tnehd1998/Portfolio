import React from "react";
import { useRecoilValue } from "recoil";
import Project from "../../components/Project";
import { projectsState } from "../../store/project";
import { Wrapper, Category } from "./styles";

const ProjectPage = () => {
  const projects = useRecoilValue(projectsState);

  return (
    <Wrapper>
      <Category>진행한 프로젝트</Category>
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
