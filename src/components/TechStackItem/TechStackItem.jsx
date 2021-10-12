import React from "react";
import {
  Content,
  LogoImage,
  TechStackItemTitle,
  TechStackItemLevel,
  SkillBar,
  SkillBarRange,
} from "./TechStackItem.styles.jsx";

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
