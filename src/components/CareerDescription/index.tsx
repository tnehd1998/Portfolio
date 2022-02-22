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
          logo={career.logo}
          name={career.name}
          period={career.period}
        />
      ))}
    </Wrapper>
  );
};

export default CareerDescription;
