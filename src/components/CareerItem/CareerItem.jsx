import React from "react";
import styled from "styled-components";

const CareerItemContainer = styled.li`
  width: 50vw;
  display: flex;
  border: 5px solid white;
  border-radius: 10px;
  padding: 10px;
  padding-right: 300px;
  margin: 1rem 0;
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

const CareerItem = ({ imageUrl, title, period }) => {
  return (
    <CareerItemContainer>
      <CareerItemImage src={imageUrl} />
      <CareerItemDescriptionContainer>
        <CareerItemTitle>{title}</CareerItemTitle>
        <CareerItemPeriod>{period}</CareerItemPeriod>
      </CareerItemDescriptionContainer>
    </CareerItemContainer>
  );
};

export default CareerItem;
