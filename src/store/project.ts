import { atom } from "recoil";
import MLBSuperstarImage from "../assets/images/mlb-superstar.png";
import KUNAImage from "../assets/images/kuna.png";
import MLBImage from "../assets/images/mlb.png";
import PortfolioImage from "../assets/images/portfolio.png";
import YoutubeImage from "../assets/images/youtube.png";
import { IProject } from "../types/project.type";

export const projectsState = atom<IProject[]>({
  key: "projectsState",
  default: [
    {
      imageUrl: MLBImage,
      title: "MLB 프로젝트",
      period: "21.12.19 ~ 현재 진행중",
      descriptions: [
        "메이저리그를 소개해 주는 프로젝트",
        "많은 사람들이 MLB를 즐겼으면 하는 마음에 시작하게된 개인 프로젝트",
      ],
      projectLink: "https://github.com/tnehd1998/MLB",
      hashtags: ["MLB", "취미", "개인", "팬 페이지"],
    },
    {
      imageUrl: MLBSuperstarImage,
      title: "SuperStar 프로젝트",
      period: "22.04.02 ~ 22.04.16",
      descriptions: [
        "유명 메이저리그 선수의 정보 및 활약 영상을 확인할 수 있는 프로젝트",
        "Mobile First Design으로 제작해 본 프로젝트",
      ],
      projectLink: "https://github.com/tnehd1998/MLB-SuperStars",
      hashtags: ["MLB", "간편", "개인", "스타"],
    },
    {
      imageUrl: PortfolioImage,
      title: "자기소개 포트폴리오",
      period: "21.10.06 ~ 현재 진행중",
      descriptions: [
        "직접 만들어본 자기 소개용 첫 개인 프로젝트",
        "자기소개, 사용기술, 프로젝트를 설명하는 사이트",
      ],
      projectLink: "https://github.com/tnehd1998/Portfolio",
      hashtags: ["첫 프로젝트", "자기소개", "개인", "포트폴리오"],
    },
    {
      imageUrl: YoutubeImage,
      title: "YouTube 클론 프로젝트",
      period: "21.10.14 ~ 21.10.29",
      descriptions: [
        "YouTube REST API 사용 연습",
        "자주 사용하는 YouTube의 기능을 그대로 따라서 만들어본 개인 프로젝트",
      ],
      projectLink: "https://github.com/tnehd1998/Youtube",
      hashtags: ["YouTube", "개인", "재미", "클론"],
    },
  ],
});

export const teamProjectsState = atom<IProject[]>({
  key: "teamProjectsState",
  default: [
    {
      imageUrl: KUNAImage,
      title: "KUNA 쇼핑몰 프로젝트",
      period: "22.01.05 ~ 22.02.23",
      descriptions: [
        "소녀나라를 기반으로 만들어본 쇼핑몰 사이트",
        "프론트엔드, 벡엔드를 나눠서 처음 진행해본 팀 프로젝트",
      ],
      projectLink: "https://github.com/Konkuk-Toy-Project/KUNA-client",
      hashtags: ["KUNA", "쇼핑", "팀", "성장"],
    },
  ],
});
