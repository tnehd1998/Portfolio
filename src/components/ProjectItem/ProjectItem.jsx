import React from "react";

import {
  ProjectItemContainer,
  ProjectItemImage,
  ProjectItemDescriptionContainer,
  ProjectItemTitle,
  ProjectItemDescription,
  ProjectLink,
  ProjectItemHashtags,
} from "./ProjectItem.styles.jsx";

const ProjectItem = ({
  imageUrl,
  title,
  description,
  projectLink,
  hashtags,
}) => {
  return (
    <ProjectItemContainer>
      <ProjectItemImage src={imageUrl} />
      <ProjectItemDescriptionContainer>
        <ProjectItemTitle>{title}</ProjectItemTitle>
        <ProjectItemDescription>{description}</ProjectItemDescription>
        <ProjectItemHashtags>
          {hashtags.map((hashtag) => (
            <li>{"#" + hashtag}</li>
          ))}
        </ProjectItemHashtags>
        <ProjectLink href={projectLink} target="_blank">
          &#8594; 해당 프로젝트로 이동
        </ProjectLink>
      </ProjectItemDescriptionContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
