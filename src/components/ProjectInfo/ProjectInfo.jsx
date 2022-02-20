import React from "react";

import {
  ProjectPageContainer,
  ProjectMainTitle,
} from "./ProjectInfo.styles.jsx";

import ProjectItem from "../../components/ProjectItem/ProjectItem";

import { useRecoilValue } from "recoil";
import { projectsState } from "../../store/project.js";

const ProjectInfo = () => {
  const projects = useRecoilValue(projectsState);

  return (
    <ProjectPageContainer>
      <ProjectMainTitle>진행한 프로젝트</ProjectMainTitle>
      {projects.map((project) => (
        <ProjectItem
          imageUrl={project[0]}
          title={project[1]}
          period={project[2]}
          descriptions={project[3]}
          projectLink={project[4]}
          hashtags={project[5]}
        />
      ))}
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
