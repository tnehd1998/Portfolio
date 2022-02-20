import React from "react";
import { useRecoilValue } from "recoil";
import { introductionsState } from "../../store/info.js";

import { Wrapper, Introduction } from "./styles.js";

const PersonalDescription = () => {
  const introductions = useRecoilValue(introductionsState);

  const currentIntroduction = (row) => {
    const currentIntroduction = introductions[row - 1];
    const combinedIntroduction = currentIntroduction.join(" ");
    return `📌 ${combinedIntroduction}`;
  };

  return (
    <Wrapper>
      <Introduction>{currentIntroduction(1)}</Introduction>
      <Introduction>{currentIntroduction(2)}</Introduction>
      <Introduction>{currentIntroduction(3)}</Introduction>
      <Introduction>{currentIntroduction(4)}</Introduction>
    </Wrapper>
  );
};

export default PersonalDescription;
