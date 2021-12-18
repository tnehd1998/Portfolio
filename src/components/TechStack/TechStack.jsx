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
      <TechStackTitle>Frontend</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"HTML5"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514615-ad6a616b-a427-459d-9278-b781f00c3d4b.png"
          }
          level={85}
        />
        <TechStackItem
          name={"CSS3"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514634-186235ea-c9e0-4082-8922-78ef5f19b676.png"
          }
          level={80}
        />
        <TechStackItem
          name={"SASS/SCSS"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514643-36ff05be-cdb0-4074-9ef0-2cd1b1e717ef.png"
          }
          level={70}
        />
        <TechStackItem
          name={"styled-components"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514655-8c2c65a0-4839-4285-8b8c-7f9cf3922823.png"
          }
          level={60}
        />
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
          level={50}
        />
        <TechStackItem
          name={"React"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514692-a0d70e24-d962-40f1-b1e3-dfe64eaec2e0.png"
          }
          level={60}
        />
        <TechStackItem
          name={"Redux"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514708-e6fc3dff-4f1a-4b5f-9a25-342231a42dc4.png"
          }
          level={25}
        />
        <TechStackItem
          name={"Redux-Saga"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514720-a59a46b7-9695-46ad-90d1-f6d8b1f57b4f.png"
          }
          level={15}
        />
        <TechStackItem
          name={"React Hooks"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514730-7d6fc940-25a3-465e-ab3b-6132c39972e3.png"
          }
          level={50}
        />
        <TechStackItem
          name={"GraphQL"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514754-6095ae9a-e430-4721-9ad6-d79617cc7303.png"
          }
          level={15}
        />
      </TechStackItems>
      <TechStackTitle>Backend</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"NodeJS"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514765-5da858d8-0b1c-4fc8-bba5-53258273a665.png"
          }
          level={35}
        />
        <TechStackItem
          name={"Express"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514780-e489e377-479d-4ca4-9406-b7156863bd38.png"
          }
          level={25}
        />
        <TechStackItem
          name={"PostgreSQL"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514789-dd4dc45e-7a3b-44bf-b7cb-2dc74bc7a538.png"
          }
          level={45}
        />
        <TechStackItem
          name={"Oracle"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514796-c33f4c98-d7e4-46f0-a39c-6084cac674fb.png"
          }
          level={45}
        />
        <TechStackItem
          name={"MongoDB"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514802-dd78c621-e298-4e0a-8931-79a0a06adc08.png"
          }
          level={35}
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
        <TechStackItem
          name={"Firebase"}
          imageUrl={
            "https://user-images.githubusercontent.com/72953316/139514840-89393164-23c2-4811-8f38-eff3b8dcac17.png"
          }
          level={45}
        />
      </TechStackItems>
    </TechStackContainer>
  );
};

export default TechStack;