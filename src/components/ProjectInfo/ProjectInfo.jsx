import React from "react";

import {
  ProjectPageContainer,
  ProjectMainTitle,
  ProjectTitle,
} from "./ProjectInfo.styles.jsx";
import Youtube from "../../assets/images/project-item-img/youtubeimg.png";
import Portfolio from "../../assets/images/project-item-img/portfolioimg.png";

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
        hashtags={["YouTube", "개인", "재미", "클론"]}
      />
      <ProjectItem
        imageUrl={Portfolio}
        title={"개인 포트폴리오"}
        period={"21.10.06 ~ 현재 진행중"}
        descriptions={[
          "직접 만들어본 자기 소개용 첫 프로젝트",
          "자기소개, 사용기술, 프로젝트를 설명하는 사이트",
        ]}
        projectLink={"https://github.com/tnehd1998/Portfolio"}
        hashtags={["첫 프로젝트", "자기소개", "포트폴리오"]}
      />
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
