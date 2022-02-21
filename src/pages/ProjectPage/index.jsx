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
          imageUrl={project[0]}
          title={project[1]}
          period={project[2]}
          descriptions={project[3]}
          projectLink={project[4]}
          hashtags={project[5]}
        />
      ))}
    </Wrapper>
  );
};

export default ProjectPage;
