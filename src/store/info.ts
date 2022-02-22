import { atom } from "recoil";
import { ICareer, IIntroduction } from "../types/info.type";

export const introductionsState = atom<IIntroduction[]>({
  key: "introductionsState",
  default: [
    {
      first: "더 나은 삶을 위해 고민하는",
      second: "🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻",
      third: "이수동입니다",
    },
    {
      first: "개발자의 입장이 아닌",
      second: "⭐️사용자의 입장을⭐️",
      third: "최우선 순위로 두고 있습니다.",
    },
    {
      first: "꾸준한 성장을 위해",
      second: "🍀1일 1커밋 운동을🍀",
      third: "하고 있습니다",
    },
    {
      first: "항상 리팩토링 과정을 통해",
      second: "🧹확장성 좋은 코드로🧹",
      third: "유지보수 하고 있습니다",
    },
  ],
});

export const careersState = atom<ICareer[]>({
  key: "careersState",
  default: [
    {
      logo: "https://user-images.githubusercontent.com/72953316/139514581-a4764ae3-07ed-49ab-9695-ee4c93ed2f5c.jpeg",
      name: "건국대학교",
      period: "2017.03 ~ 현재",
    },
  ],
});
