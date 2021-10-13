import React from "react";

import KonkukImage from "../../assets/images/career-item/konkuk.jpeg";
import styled from "styled-components";

const CareerDescriptionContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const CareerItemContainer = styled.li`
  width: 50vw;
  display: flex;
  border: 5px solid white;
  border-radius: 10px;
  padding: 10px;
  padding-right: 300px;
`;

const CareerItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 30px;
`;

const CareerItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CareerItemTitle = styled.p`
  font-size: 24px;
`;

const CareerItemPeriod = styled.p`
  font-size: 18px;
`;

const CareerDescription = () => {
  return (
    <CareerDescriptionContainer>
      <CareerItemContainer>
        <CareerItemImage src={KonkukImage} />
        <CareerItemDescriptionContainer>
          <CareerItemTitle>건국대학교</CareerItemTitle>
          <CareerItemPeriod>2017.03 ~ 현재</CareerItemPeriod>
        </CareerItemDescriptionContainer>
      </CareerItemContainer>
    </CareerDescriptionContainer>
  );
};

export default CareerDescription;
