import React from "react";

import PersonalDescription from "../PersonalDescription/PersonalDescription";
import TechStack from "../TechStack/TechStack";

import {
  AboutDescriptionContainer,
  CommentTitle,
} from "./AboutDescription.styles.jsx";

const AboutDescription = () => {
  return (
    <AboutDescriptionContainer>
      <CommentTitle>About Me 🧑🏻‍💻</CommentTitle>
      <PersonalDescription />
      <CommentTitle>Tech Stack</CommentTitle>
      <TechStack />
    </AboutDescriptionContainer>
  );
};

export default AboutDescription;
