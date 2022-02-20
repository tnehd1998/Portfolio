import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { quotesState } from "../../store/info.js";
import {
  IntroductionContent,
  IntroductionText,
} from "./Introduction.styles.jsx";

const Introduction = () => {
  const quotes = useRecoilValue(quotesState);
  const [currentQuote, setCurrentQuote] = useState(0);

  const changeQuote = useCallback(() => {
    if (currentQuote === 3) {
      return setCurrentQuote(0);
    }
    return setCurrentQuote((current) => current + 1);
  }, [currentQuote]);

  useEffect(() => {
    const timer = setTimeout(() => changeQuote(), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [changeQuote]);

  const currentText = (row) => {
    return quotes[currentQuote][row - 1];
  };

  return (
    <IntroductionContent>
      <IntroductionText>{currentText(1)}</IntroductionText>
      <IntroductionText>{currentText(2)}</IntroductionText>
      <IntroductionText>{currentText(3)}</IntroductionText>
    </IntroductionContent>
  );
};

export default Introduction;
