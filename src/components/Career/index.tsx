import { ICareer } from "../../types/info.type";
import { Wrapper, Logo, DescriptionWrapper, Name, Period } from "./styles";

const CareerItem = ({ logo, name, period }: ICareer) => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <DescriptionWrapper>
        <Name>{name}</Name>
        <Period>{period}</Period>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default CareerItem;
