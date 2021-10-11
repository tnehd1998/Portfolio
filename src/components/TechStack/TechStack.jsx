import React from "react";
import styled from "styled-components";
import TechStackItem from "../TechStackItem/TechStackItem";

import HTML5Image from "../../assets/images/tech-stack-img/html5.png";
import CSS3Image from "../../assets/images/tech-stack-img/css3.png";
import SASSImage from "../../assets/images/tech-stack-img/sass.png";
import StyledComponentImage from "../../assets/images/tech-stack-img/styled-components.png";
import JavascriptImage from "../../assets/images/tech-stack-img/javascript.png";
import TypescriptImage from "../../assets/images/tech-stack-img/typescript.png";
import ReactImage from "../../assets/images/tech-stack-img/react.png";
import ReduxImage from "../../assets/images/tech-stack-img/redux.png";
import ReduxSagaImage from "../../assets/images/tech-stack-img/redux-saga.png";
import ReactHooksImage from "../../assets/images/tech-stack-img/react-hooks.png";
import GraphQLImage from "../../assets/images/tech-stack-img/graphql.png";
import NodeJSImage from "../../assets/images/tech-stack-img/nodejs.png";
import ExpressImage from "../../assets/images/tech-stack-img/express.png";
import PostgreSQLImage from "../../assets/images/tech-stack-img/postgresql.png";
import OracleImage from "../../assets/images/tech-stack-img/oracle.png";
import MongoDBImage from "../../assets/images/tech-stack-img/mongodb.png";
import GitImage from "../../assets/images/tech-stack-img/git.png";
import GithubImage from "../../assets/images/tech-stack-img/github.png";
import FirebaseImage from "../../assets/images/tech-stack-img/firebase.png";

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
        <TechStackItem name={"HTML5"} imageUrl={HTML5Image} level={85} />
        <TechStackItem name={"CSS3"} imageUrl={CSS3Image} level={80} />
        <TechStackItem name={"SASS/SCSS"} imageUrl={SASSImage} level={70} />
        <TechStackItem
          name={"styled-components"}
          imageUrl={StyledComponentImage}
          level={60}
        />
        <TechStackItem
          name={"JavaScript"}
          imageUrl={JavascriptImage}
          level={75}
        />
        <TechStackItem
          name={"TypeScript"}
          imageUrl={TypescriptImage}
          level={50}
        />
        <TechStackItem name={"React"} imageUrl={ReactImage} level={60} />
        <TechStackItem name={"Redux"} imageUrl={ReduxImage} level={25} />
        <TechStackItem
          name={"Redux-Saga"}
          imageUrl={ReduxSagaImage}
          level={15}
        />
        <TechStackItem
          name={"React Hooks"}
          imageUrl={ReactHooksImage}
          level={50}
        />
        <TechStackItem name={"GraphQL"} imageUrl={GraphQLImage} level={15} />
      </TechStackItems>
      <TechStackTitle>Backend</TechStackTitle>
      <TechStackItems>
        <TechStackItem name={"NodeJS"} imageUrl={NodeJSImage} level={35} />
        <TechStackItem name={"Express"} imageUrl={ExpressImage} level={25} />
        <TechStackItem
          name={"PostgreSQL"}
          imageUrl={PostgreSQLImage}
          level={45}
        />
        <TechStackItem name={"Oracle"} imageUrl={OracleImage} level={45} />
        <TechStackItem name={"MongoDB"} imageUrl={MongoDBImage} level={35} />
      </TechStackItems>
      <TechStackTitle>Developer Tools</TechStackTitle>
      <TechStackItems>
        <TechStackItem name={"Git"} imageUrl={GitImage} level={65} />
        <TechStackItem name={"Github"} imageUrl={GithubImage} level={60} />
        <TechStackItem name={"Firebase"} imageUrl={FirebaseImage} level={45} />
      </TechStackItems>
    </TechStackContainer>
  );
};

export default TechStack;
