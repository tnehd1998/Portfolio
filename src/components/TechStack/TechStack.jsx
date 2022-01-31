import React from "react";
import {
  TechStackContainer,
  TechStackTitle,
  TechStackItems,
} from "./TechStack.styles.jsx";
import TechStackItem from "../TechStackItem/TechStackItem";

const TechStack = () => {
  return (
    <TechStackContainer>
      <TechStackTitle>Language</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"JavaScript"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514668-daf638fd-d47f-44f8-b8be-59978a9d5623.png"
          }
          level={75}
        />
        <TechStackItem
          name={"TypeScript"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514680-fb2aa67b-f663-4061-85be-6af4a48d5c1e.png"
          }
          level={60}
        />
      </TechStackItems>
      <TechStackTitle>Frontend</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"React"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514692-a0d70e24-d962-40f1-b1e3-dfe64eaec2e0.png"
          }
          level={75}
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
          level={70}
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
      </TechStackItems>
      <TechStackTitle>Developer Tools</TechStackTitle>
      <TechStackItems>
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
          level={60}
        />
      </TechStackItems>
    </TechStackContainer>
  );
};

export default TechStack;
