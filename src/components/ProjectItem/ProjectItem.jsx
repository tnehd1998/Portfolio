import React from "react";

import {
  ProjectItemContainer,
  ProjectItemImage,
  ProjectItemDescriptionContainer,
  ProjectItemHeading,
  ProjectItemTitle,
  ProjectItemPeriod,
  ProjectItemDescription,
  ProjectLink,
  ProjectItemHashtags,
} from "./ProjectItem.styles.jsx";

const ProjectItem = ({
  imageUrl,
  title,
  period,
  descriptions,
  projectLink,
  hashtags,
}) => {
  return (
    <ProjectItemContainer>
      <ProjectItemImage src={imageUrl} />
      <ProjectItemDescriptionContainer>
        <ProjectItemHeading>
          <ProjectItemTitle>{title}</ProjectItemTitle>
          <ProjectItemPeriod>{period}</ProjectItemPeriod>
        </ProjectItemHeading>
        <ProjectItemHashtags>
          {hashtags.map((hashtag) => (
            <li>{"#" + hashtag}</li>
          ))}
        </ProjectItemHashtags>
        <ProjectItemDescription>
          {descriptions.map((description) => (
            <li>{"📌 " + description}</li>
          ))}
        </ProjectItemDescription>
        <ProjectLink href={projectLink} target="_blank">
          &#8594; 해당 프로젝트로 이동
        </ProjectLink>
      </ProjectItemDescriptionContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;
