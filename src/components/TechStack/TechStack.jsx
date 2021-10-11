import React from "react";
import styled from "styled-components";
import TechStackItem from "../TechStackItem/TechStackItem";

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

const TechStackTitle = styled.p`
  font-size: 24px;
`;

const TechStackItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 4rem;
  margin: 7rem 0;
`;

const TechStack = () => {
  return (
    <TechStackContainer>
      <TechStackTitle>Frontend</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"HTML5"}
          imageUrl={"tech-stack-img/html5.png"}
          level={85}
        />
        <TechStackItem
          name={"CSS3"}
          imageUrl={"tech-stack-img/css3.png"}
          level={80}
        />
        <TechStackItem
          name={"SASS/SCSS"}
          imageUrl={"tech-stack-img/sass.png"}
          level={70}
        />
        <TechStackItem
          name={"styled-components"}
          imageUrl={"tech-stack-img/styled-components.png"}
          level={60}
        />
        <TechStackItem
          name={"JavaScript"}
          imageUrl={"tech-stack-img/javascript.png"}
          level={75}
        />
        <TechStackItem
          name={"TypeScript"}
          imageUrl={"tech-stack-img/typescript.png"}
          level={50}
        />
        <TechStackItem
          name={"React"}
          imageUrl={"tech-stack-img/react.png"}
          level={60}
        />
        <TechStackItem
          name={"Redux"}
          imageUrl={"tech-stack-img/redux.png"}
          level={25}
        />
        <TechStackItem
          name={"Redux-Saga"}
          imageUrl={"tech-stack-img/redux-saga.png"}
          level={15}
        />
        <TechStackItem
          name={"React Hooks"}
          imageUrl={"tech-stack-img/react-hooks.png"}
          level={50}
        />
        <TechStackItem
          name={"GraphQL"}
          imageUrl={"tech-stack-img/graphql.png"}
          level={15}
        />
      </TechStackItems>
      <TechStackTitle>Backend</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"NodeJS"}
          imageUrl={"tech-stack-img/nodejs.png"}
          level={35}
        />
        <TechStackItem
          name={"Express"}
          imageUrl={"tech-stack-img/express.png"}
          level={25}
        />
        <TechStackItem
          name={"PostgreSQL"}
          imageUrl={"tech-stack-img/postgresql.png"}
          level={45}
        />
        <TechStackItem
          name={"Oracle"}
          imageUrl={"tech-stack-img/oracle.png"}
          level={45}
        />
        <TechStackItem
          name={"MongoDB"}
          imageUrl={"tech-stack-img/mongodb.png"}
          level={35}
        />
      </TechStackItems>
      <TechStackTitle>Developer Tools</TechStackTitle>
      <TechStackItems>
        <TechStackItem
          name={"Git"}
          imageUrl={"tech-stack-img/git.png"}
          level={65}
        />
        <TechStackItem
          name={"Github"}
          imageUrl={"tech-stack-img/github.png"}
          level={60}
        />
        <TechStackItem
          name={"Firebase"}
          imageUrl={"tech-stack-img/firebase.png"}
          level={45}
        />
      </TechStackItems>
    </TechStackContainer>
  );
};

export default TechStack;
