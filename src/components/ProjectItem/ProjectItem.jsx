import React from "react";

import {
  ProjectItemContainer,
  ProjectItemImage,
  ProjectItemDescriptionContainer,
  ProjectItemTitle,
  ProjectItemDescription,
  ProjectLink,
} from "./ProjectItem.styles.jsx";

const ProjectItem = ({ imageUrl, title, description, projectLink }) => {
  return (
    <ProjectItemContainer>
      <ProjectItemImage src={imageUrl} />
      <ProjectItemDescriptionContainer>
        <ProjectItemTitle>{title}</ProjectItemTitle>
        <ProjectItemDescription>{description}</ProjectItemDescription>
        <ProjectLink href={projectLink} target="_blank">
          &#8594; 해당 프로젝트로 이동
        </ProjectLink>
      </ProjectItemDescriptionContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
