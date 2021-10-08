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
  margin-bottom: 2rem;
`;

const TechStackItem = ({ name, imageUrl }) => {
  return (
    <Content>
      <LogoImage src={imageUrl} />
      <h1>{name}</h1>
    </Content>
  );
};

export default TechStackItem;
