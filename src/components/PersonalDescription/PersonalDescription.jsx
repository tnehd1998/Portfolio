import React from "react";
import Face from "../../assets/images/profile.jpeg";
import styled from "styled-components";
import TechStackItem from "../TechStackItem/TechStackItem";

const PersonalDescriptionContainer = styled.div`
  padding-top: 20vh;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;

const CommentTitle = styled.div`
  font-size: 32px;
  text-align: center;
`;

const CommentContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DescriptionComment = styled.p`
  font-size: 24px;
`;

const FaceAndName = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 24px;
  background: linear-gradient(#ffffff 50%, rgba(255, 255, 255, 0) 0) 0 0,
    radial-gradient(circle closest-side, #ffffff 53%, rgba(255, 255, 255, 0) 0)
      0 0,
    radial-gradient(circle closest-side, #ffffff 50%, rgba(255, 255, 255, 0) 0)
      55px 0 #48b;
  background-size: 110px 200px;
  background-repeat: repeat-x;
`;

const FaceImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

const FaceDescription = styled.p`
  margin-top: 1rem;
  font-size: 24px;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200vh;
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

const PersonalDescription = () => {
  return (
    <PersonalDescriptionContainer>
      <CommentTitle>About Me 🧑🏻‍💻</CommentTitle>
      <DescriptionContainer>
        <CommentContainer>
          <DescriptionComment>
            안녕하세요! 개발🧑🏻‍💻과 야구⚾️를 사랑하는 프론트엔드 개발자
            이수동입니다.
          </DescriptionComment>
          <DescriptionComment>
            개발을 잘하는 개발자보다 꾸준한 개발자⏳가 되기 위해 노력중입니다.
          </DescriptionComment>
          <DescriptionComment>
            꾸준함의 중요성을 잘 알기 때문에 🌱1일 1커밋 운동🌱을 하고 있습니다.
          </DescriptionComment>
          <DescriptionComment>
            무작정 작동하는 코드보다 효율적인 코드🧮를 짜기위해 항상 고민하고
            있습니다.
          </DescriptionComment>
        </CommentContainer>
        <FaceAndName>
          <FaceImage src={Face} alt="Face" />
          <FaceDescription>Billy the Coder</FaceDescription>
        </FaceAndName>
      </DescriptionContainer>
      <CommentTitle>Tech Stack</CommentTitle>
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
    </PersonalDescriptionContainer>
  );
};

export default PersonalDescription;
