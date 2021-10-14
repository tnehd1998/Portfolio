import React from "react";
import {
  CareerItemContainer,
  CareerItemImage,
  CareerItemDescriptionContainer,
  CareerItemTitle,
  CareerItemPeriod,
} from "./CareerItem.styles";

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
