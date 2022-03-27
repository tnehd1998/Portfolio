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
  ],
});
