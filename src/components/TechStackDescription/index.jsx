import React from "react";
import { Wrapper, Category, TechStackWrapper } from "./styles.js";
import TechStackItem from "../TechStack";

const TechStackDescription = () => {
  return (
    <Wrapper>
      <Category>사용 언어</Category>
      <TechStackWrapper>
        <TechStackItem
          name={"JavaScript"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514668-daf638fd-d47f-44f8-b8be-59978a9d5623.png"
          }
          level={85}
        />
        <TechStackItem
          name={"TypeScript"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514680-fb2aa67b-f663-4061-85be-6af4a48d5c1e.png"
          }
          level={65}
        />
      </TechStackWrapper>
      <Category>사용 기술</Category>
      <TechStackWrapper>
        <TechStackItem
          name={"React"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514692-a0d70e24-d962-40f1-b1e3-dfe64eaec2e0.png"
          }
          level={80}
        />
        <TechStackItem
          name={"Recoil"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/151725152-83583fc0-042c-4f00-b85d-33424cb923db.png"
          }
          level={65}
        />
        <TechStackItem
          name={"styled-components"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514655-8c2c65a0-4839-4285-8b8c-7f9cf3922823.png"
          }
          level={75}
        />
        <TechStackItem
          name={"React-query"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/151725062-546049e5-92fc-486d-923b-a302f826013f.svg"
          }
          level={60}
        />
        <TechStackItem
          name={"Jest"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/151725754-2864cf3a-8240-4cec-a06b-c0cdb08c25a5.png"
          }
          level={60}
        />
      </TechStackWrapper>
      <Category>공부중인 기술</Category>
      <TechStackWrapper>
        <TechStackItem
          name={"GraphQL"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514754-6095ae9a-e430-4721-9ad6-d79617cc7303.png"
          }
          level={45}
        />
        <TechStackItem
          name={"NextJS"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/151731966-14852282-762a-470a-8502-74f778b2c1bb.png"
          }
          level={25}
        />
      </TechStackWrapper>
      <Category>개발자 도구</Category>
      <TechStackWrapper>
        <TechStackItem
          name={"Git"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514819-4eafb3e0-81c9-4bf7-89bd-cf955418a463.png"
          }
          level={65}
        />
        <TechStackItem
          name={"Github"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514830-219b9369-2ec9-48fe-947b-ab08d4f324e0.png"
          }
          level={75}
        />
      </TechStackWrapper>
    </Wrapper>
  );
};

export default TechStackDescription;
