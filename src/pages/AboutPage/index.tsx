import CareerDescription from "../../components/CareerDescription";
import PersonalDescription from "../../components/PersonalDescription";
import TechStackDescription from "../../components/TechStackDescription";
import { Wrapper, Category } from "./styles";

const AboutPage = () => {
  return (
    <Wrapper>
      <Category>About Me 🧑🏻‍💻</Category>
      <PersonalDescription />
      <Category>Career Path</Category>
      <CareerDescription />
      <Category>Tech Stack</Category>
      <TechStackDescription />
    </Wrapper>
  );
};

export default AboutPage;
