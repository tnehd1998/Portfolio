import React from "react";
import styled from "styled-components";

const Content = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

const TechStackItemTitle = styled.p`
  font-size: 16px;
  margin: 2rem 0;
`;

const TechStackItemLevel = styled.p`
  font-size: 12px;
  margin-top: 1rem;
`;

const SkillBar = styled.div`
  width: 5rem;
  height: 5px;
  background-color: white;
`;

const SkillBarRange = styled.div`
  width: ${(props) => `${props.level}%`};
  height: 5px;
  background-color: ${(props) =>
    props.level > 70 ? "green" : props.level > 40 ? "yellow" : "red"};
`;

const TechStackItem = ({ name, imageUrl, level }) => {
  return (
    <Content>
      <LogoImage src={imageUrl} />
      <TechStackItemTitle>{name}</TechStackItemTitle>
      <SkillBar>
        <SkillBarRange level={level} />
      </SkillBar>
      <TechStackItemLevel>숙련도 : {level}/100</TechStackItemLevel>
    </Content>
  );
};

export default TechStackItem;
