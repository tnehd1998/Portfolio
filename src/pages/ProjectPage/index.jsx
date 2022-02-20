import React from "react";
import { useRecoilValue } from "recoil";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { projectsState } from "../../store/project";
import { ProjectPageContainer, ProjectMainTitle } from "./styles";

const ProjectPage = () => {
  const projects = useRecoilValue(projectsState);

  return (
    <ProjectPageContainer>
      <ProjectMainTitle>진행한 프로젝트</ProjectMainTitle>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
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

export default ProjectPage;
