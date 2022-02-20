import React from "react";
import CareerDescription from "../../components/CareerDescription/CareerDescription";
import PersonalDescription from "../../components/PersonalDescription/PersonalDescription";
import TechStack from "../../components/TechStack/TechStack";
import { AboutDescriptionContainer, CommentTitle } from "./styles";

const AboutPage = () => {
  return (
    <AboutDescriptionContainer>
      <CommentTitle>About Me 🧑🏻‍💻</CommentTitle>
      <PersonalDescription />
      <CommentTitle>Career Path</CommentTitle>
      <CareerDescription />
      <CommentTitle>Tech Stack</CommentTitle>
      <TechStack />
    </AboutDescriptionContainer>
  );
};

export default AboutPage;
