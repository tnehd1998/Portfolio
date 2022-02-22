import { ITechStack } from "../../types/info.type";
import { Wrapper, Logo, Name, SkillBar, SkillBarRange, Level } from "./styles";

const TechStack = ({ name, imageUrl, level }: ITechStack) => {
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
