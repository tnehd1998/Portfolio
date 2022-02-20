import { atom } from "recoil";

export const quotesState = atom({
  key: "quotesState",
  default: [
    [
      "더 나은 삶을 위해 고민하는",
      "🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻",
      "이수동입니다",
    ],
    [
      "개발자의 입장이 아닌",
      "⭐️사용자의 입장을⭐️",
      "최우선 순위로 두고 있습니다.",
    ],
    ["꾸준한 성장을 위해", "🍀1일 1커밋 운동을🍀", "하고 있습니다"],
    [
      "항상 리팩토링 과정을 통해",
      "🧹확장성 좋은 코드로🧹",
      "유지보수 하고 있습니다",
    ],
  ],
});

export const careersState = atom({
  key: "careersState",
  default: [
    [
      "https://user-images.githubusercontent.com/72953316/139514581-a4764ae3-07ed-49ab-9695-ee4c93ed2f5c.jpeg",
      "건국대학교",
      "2017.03 ~ 현재",
    ],
  ],
});
