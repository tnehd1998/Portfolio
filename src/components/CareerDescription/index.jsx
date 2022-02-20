import React from "react";
import { useRecoilValue } from "recoil";
import { careersState } from "../../store/info";

import Career from "../Career";
import { Wrapper } from "./styles";

const CareerDescription = () => {
  const careers = useRecoilValue(careersState);

  return (
    <Wrapper>
      {careers.map((career, index) => (
        <Career
          key={index}
          imageUrl={career[0]}
          name={career[1]}
          period={career[2]}
        />
      ))}
    </Wrapper>
  );
};

export default CareerDescription;
