import { atom } from "recoil";
import { IBlog } from "../types/blog.type";

export const blogState = atom<IBlog[]>({
  key: "blogState",
  default: [
    {
      blogId: 1,
      blogLink: "https://techblog.woowahan.com/6339/",
      title: "Store에서 비동기 통신 분리하기 (feat. React Query)",
      question: "상태관리에서 비동기 데이터 처리를 어떻게 분리할 수 있을까?",
    },
    {
      blogId: 2,
      blogLink: "https://yeoulcoding.tistory.com/149",
      title: "[React] 클로저와 useState Hooks",
      question: "클로저가 React의 어느 부분에서 활용되고 있을까?",
    },
    {
      blogId: 3,
      blogLink: "https://youtu.be/0-UaleJZOw8",
      title: "[B1] 상태관리, 이제 Recoil 하세요.",
      question: "Redux 말고 React스럽게 상태관리를 할 수는 없을까?",
    },
    {
      blogId: 4,
      blogLink:
        "https://velog.io/@tnehd1998/%ED%95%A8%EA%BB%98-%EC%9E%90%EB%9D%BC%EA%B8%B0-%EC%95%A0%EC%9E%90%EC%9D%BC%EB%A1%9C-%EA%B0%80%EB%8A%94-%EA%B8%B8",
      title: "함께 자라기 | 애자일로 가는 길",
      question: "개발자로써 어떻게 하면 제대로 성장할 수 있을까?",
    },
    {
      blogId: 5,
      blogLink:
        "https://velog.io/@tnehd1998/IT%EC%97%90-%EB%AA%B8%EB%8B%B4%EC%9D%80-%EC%9D%B4%EB%93%A4%EC%9D%84-%EC%9C%84%ED%95%9C-%EC%A7%80%EC%A0%81%EC%83%9D%EC%82%B0%EA%B8%B0%EC%88%A0",
      title: "IT에 몸담은 이들을 위한 지적생산기술",
      question: "어떻게 하면 효율적으로 공부를 할 수 있을까?",
    },
    {
      blogId: 6,
      blogLink:
        "https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0",
      title: "[Recoil] Recoil 200% 활용하기",
      question: "Recoil을 좀 더 확실하게 사용하는 방법이 있을까?",
    },
    {
      blogId: 7,
      blogLink:
        "https://velog.io/@tnehd1998/tsconfig.json-%EB%82%B4%EC%9A%A9-%EC%A0%95%EB%A6%AC",
      title: "tsconfig.json 내용 정리",
      question: "TypeScript를 직접 설정할 수는 없을까?",
    },
  ],
});
