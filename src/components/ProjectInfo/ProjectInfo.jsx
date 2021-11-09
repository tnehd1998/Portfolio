import React from "react";

import {
  ProjectPageContainer,
  ProjectMainTitle,
} from "./ProjectInfo.styles.jsx";

import ProjectItem from "../../components/ProjectItem/ProjectItem";

const ProjectInfo = () => {
  return (
    <ProjectPageContainer>
      <ProjectMainTitle>진행한 프로젝트</ProjectMainTitle>
      <ProjectItem
        imageUrl={
          "https://user-images.githubusercontent.com/72953316/139514867-c7b003a9-220c-4132-bb5c-46a6335ef331.png"
        }
        title={"YouTube 클론 프로젝트"}
        period={"21.10.14 ~ 현재 진행중"}
        descriptions={[
          "YouTube REST API 사용 연습",
          "자주 사용하는 YouTube의 기능을 그대로 따라서 만들어본 개인 프로젝트",
        ]}
        projectLink={"https://github.com/tnehd1998/Youtube"}
        hashtags={["YouTube", "개인", "재미", "클론"]}
      />
      <ProjectItem
        imageUrl={
          "https://user-images.githubusercontent.com/72953316/139514890-746c31f4-9219-43b1-93e5-3b8f6f967b15.png"
        }
        title={"자기소개용 포트폴리오"}
        period={"21.10.06 ~ 현재 진행중"}
        descriptions={[
          "직접 만들어본 자기 소개용 첫 개인 프로젝트",
          "자기소개, 사용기술, 프로젝트를 설명하는 사이트",
        ]}
        projectLink={"https://github.com/tnehd1998/Portfolio"}
        hashtags={["첫 프로젝트", "자기소개", "개인", "포트폴리오"]}
      />
    </ProjectPageContainer>
  );
};

export default ProjectInfo;
