import React from "react";

import CareerItem from "../CareerItem/CareerItem";
import { CareerDescriptionContainer } from "./CareerDescription.styles";

const CareerDescription = () => {
  return (
    <CareerDescriptionContainer>
      <CareerItem
        imageUrl={
          "https://user-images.githubusercontent.com/72953316/139514581-a4764ae3-07ed-49ab-9695-ee4c93ed2f5c.jpeg"
        }
        title={"건국대학교"}
        period={"2017.03 ~ 현재"}
      />
    </CareerDescriptionContainer>
  );
};

export default CareerDescription;
