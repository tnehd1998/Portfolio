import React from "react";

import KonkukImage from "../../assets/images/career-item/konkuk.jpeg";
import styled from "styled-components";
import CareerItem from "../CareerItem/CareerItem";

const CareerDescriptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const CareerDescription = () => {
  return (
    <CareerDescriptionContainer>
      <CareerItem
        imageUrl={KonkukImage}
        title={"건국대학교"}
        period={"2017.03 ~ 현재"}
      />
      <CareerItem
        imageUrl={KonkukImage}
        title={"건국대학교"}
        period={"2017.03 ~ 현재"}
      />
    </CareerDescriptionContainer>
  );
};

export default CareerDescription;
