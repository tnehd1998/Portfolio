import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { introductionsState } from "../../store/info";
import { Wrapper, IntroductionText } from "./styles";

const MainPage = () => {
  const introductions = useRecoilValue(introductionsState);
  const [currentIntroduction, setCurrentIntroduction] = useState(0);

  const changeIntroduction = useCallback(() => {
    if (currentIntroduction === 3) {
      return setCurrentIntroduction(0);
    }
    return setCurrentIntroduction((current) => current + 1);
  }, [currentIntroduction]);

  const currentRow = (row) => {
    return introductions[currentIntroduction][row - 1];
  };

  useEffect(() => {
    const timer = setTimeout(() => changeIntroduction(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [changeIntroduction]);

  return (
    <Wrapper>
      <IntroductionText>{currentRow(1)}</IntroductionText>
      <IntroductionText>{currentRow(2)}</IntroductionText>
      <IntroductionText>{currentRow(3)}</IntroductionText>
    </Wrapper>
  );
};

export default MainPage;
