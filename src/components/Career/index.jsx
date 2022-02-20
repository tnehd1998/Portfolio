import React from "react";
import { Wrapper, Logo, DescriptionWrapper, Name, Period } from "./styles";

const CareerItem = ({ imageUrl, name, period }) => {
  return (
    <Wrapper>
      <Logo src={imageUrl} />
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Period>{period}</Period>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default CareerItem;
