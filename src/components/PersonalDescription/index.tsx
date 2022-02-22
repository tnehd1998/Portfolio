import React from "react";
import { useRecoilValue } from "recoil";
import { introductionsState } from "../../store/info";

import { Wrapper, Introduction } from "./styles";

const PersonalDescription = () => {
  const introductions = useRecoilValue(introductionsState);

  const currentRow = (row: number) => {
    const currentIntroduction = introductions[row - 1];
    let combinedIntroduction = "";
    for (let value of Object.values(currentIntroduction)) {
      combinedIntroduction += `${value} `;
    }
    return `📌 ${combinedIntroduction}`;
  };

  return (
    <Wrapper>
      <Introduction>{currentRow(1)}</Introduction>
      <Introduction>{currentRow(2)}</Introduction>
      <Introduction>{currentRow(3)}</Introduction>
      <Introduction>{currentRow(4)}</Introduction>
    </Wrapper>
  );
};

export default PersonalDescription;
