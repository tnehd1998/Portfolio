import React from "react";

import {
  ProjectPageContainer,
  ProjectMainTitle,
  ProjectTitle,
} from "./ProjectInfo.styles.jsx";
import ExampleImage from "../../assets/images/project-item-img/example.png";

import ProjectItem from "../../components/ProjectItem/ProjectItem";

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
