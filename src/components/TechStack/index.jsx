import React from "react";
import {
  Wrapper,
  Logo,
  Name,
  SkillBar,
  SkillBarRange,
  Level,
} from "./styles.js";

const TechStack = ({ name, imageUrl, level }) => {
  return (
    <Wrapper>
      <Logo src={imageUrl} />
      <Name>{name}</Name>
      <SkillBar>
        <SkillBarRange level={level} />
      </SkillBar>
      <Level>숙련도 : {level}/100</Level>
    </Wrapper>
  );
};

export default TechStack;
