import React from "react";
import styled from "styled-components";

import PersonalDescription from "../PersonalDescription/PersonalDescription";
import TechStack from "../TechStack/TechStack";

const AboutDescriptionContainer = styled.div`
  padding-top: 20vh;
  height: 300vh;
`;

const CommentTitle = styled.div`
  font-size: 32px;
  text-align: center;
`;

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
