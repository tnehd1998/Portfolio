import React from "react";

import {
  ProjectPageContainer,
  ProjectMainTitle,
  ProjectTitle,
} from "./ProjectInfo.styles.jsx";
import Youtube from "../../assets/images/project-item-img/youtubeimg.png";

import ProjectItem from "../../components/ProjectItem/ProjectItem";

const ProjectInfo = () => {
  return (
    <ProjectPageContainer>
      <ProjectMainTitle>진행한 프로젝트</ProjectMainTitle>
      <ProjectTitle>개인 프로젝트</ProjectTitle>
      <ProjectItem
        imageUrl={Youtube}
        title={"유튜브 클론 프로젝트"}
        description={
          "자주 사용하는 유튜브의 기능을 그대로 따라서 만들어본 프로젝트 (현재 진행중 21.10.14~)"
        }
        projectLink={"https://github.com/tnehd1998/Youtube"}
      />
      {/* <ProjectTitle>팀 프로젝트</ProjectTitle>
      <ProjectItem
        imageUrl={ExampleImage}
        title={"프로젝트 제목"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia aut, velit incidunt itaque obcaecati modi, laborum voluptate veniam dolor quis. Dolorum nihil unde, cumque ipsa quaerat temporibus veniam quas."
        }
        projectLink={"https://www.naver.com"}
      /> */}
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
