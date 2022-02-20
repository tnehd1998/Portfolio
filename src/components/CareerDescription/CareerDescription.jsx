import React from "react";
import { useRecoilValue } from "recoil";
import { careersState } from "../../store/info";

import CareerItem from "../CareerItem/CareerItem";
import { CareerDescriptionContainer } from "./CareerDescription.styles";

const CareerDescription = () => {
  const careers = useRecoilValue(careersState);

  return (
    <CareerDescriptionContainer>
      {careers.map((career) => (
        <CareerItem imageUrl={career[0]} title={career[1]} period={career[2]} />
      ))}
    </CareerDescriptionContainer>
  );
};

export default CareerDescription;
