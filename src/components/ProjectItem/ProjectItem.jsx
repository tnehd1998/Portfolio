import React from "react";
import styled from "styled-components";

const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const ProjectItemImage = styled.img`
  width: 50vw;
  height: 50vh;
`;

const ProjectItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  width: 30vw;
`;

const ProjectItemTitle = styled.p`
  font-size: 36px;
`;

const ProjectItemDescription = styled.p`
  font-size: 24px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`;

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
