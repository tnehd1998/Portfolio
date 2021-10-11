import React from "react";
import styled from "styled-components";
import ExampleImage from "../../assets/images/project-item-img/example.png";

import ProjectItem from "../../components/ProjectItem/ProjectItem";

const ProjectPageContainer = styled.div`
  height: 280vh;
  display: flex;
  flex-direction: column;
  padding: 0 5rem;
  padding-top: 20vh;
`;

const ProjectMainTitle = styled.p`
  font-size: 32px;
  text-align: center;
`;

const ProjectTitle = styled.p`
  font-size: 32px;
  margin-left: 12rem;
  margin-top: 5rem;
`;

const ProjectInfo = () => {
  return (
    <ProjectPageContainer>
      <ProjectMainTitle>진행한 프로젝트</ProjectMainTitle>
      <ProjectTitle>개인 프로젝트</ProjectTitle>
      <ProjectItem
        imageUrl={ExampleImage}
        title={"프로젝트 제목"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aut, velit incidunt itaque obcaecati modi, laborum voluptate veniam dolor quis. Dolorum nihil unde, cumque ipsa quaerat temporibus veniam quas."
        }
        projectLink={"https://www.naver.com"}
      />
      <ProjectItem
        imageUrl={ExampleImage}
        title={"프로젝트 제목"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aut, velit incidunt itaque obcaecati modi, laborum voluptate veniam dolor quis. Dolorum nihil unde, cumque ipsa quaerat temporibus veniam quas."
        }
        projectLink={"https://www.naver.com"}
      />
      <ProjectTitle>팀 프로젝트</ProjectTitle>
      <ProjectItem
        imageUrl={ExampleImage}
        title={"프로젝트 제목"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aut, velit incidunt itaque obcaecati modi, laborum voluptate veniam dolor quis. Dolorum nihil unde, cumque ipsa quaerat temporibus veniam quas."
        }
        projectLink={"https://www.naver.com"}
      />
      <ProjectItem
        imageUrl={ExampleImage}
        title={"프로젝트 제목"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aut, velit incidunt itaque obcaecati modi, laborum voluptate veniam dolor quis. Dolorum nihil unde, cumque ipsa quaerat temporibus veniam quas."
        }
        projectLink={"https://www.naver.com"}
      />
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
