import React from "react";

import KonkukImage from "../../assets/images/career-item/konkuk.jpeg";
import CareerItem from "../CareerItem/CareerItem";
import { CareerDescriptionContainer } from "./CareerDescription.styles";

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
