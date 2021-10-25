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
        title={"YouTube 클론 프로젝트"}
        period={"21.10.14 ~ 현재 진행중"}
        descriptions={[
          "YouTube REST API 사용 연습",
          "자주 사용하는 YouTube의 기능을 그대로 따라서 만들어본 프로젝트",
        ]}
        projectLink={"https://github.com/tnehd1998/Youtube"}
        hashtags={["첫 프로젝트", "YouTube", "개인", "재미", "클론"]}
      />
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
