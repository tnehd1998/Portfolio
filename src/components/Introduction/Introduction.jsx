import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const IntroductionContent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`;

const IntroductionText = styled.h1`
  animation: changeColorText 5s infinite;
  background: transparent;
  @keyframes changeColorText {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Introduction = () => {
  const [describe, setDescribe] = useState(1);
  const [describeText, setDescibeText] = useState("꿈꾸는");

  const changeDescribe = useCallback(() => {
    switch (describe) {
      case 1:
        setDescibeText("노력하는");
        setDescribe(2);
        break;
      case 2:
        setDescibeText("즐기는");
        setDescribe(3);
        break;
      case 3:
        setDescibeText("발전하는");
        setDescribe(4);
        break;
      case 4:
        setDescibeText("꿈꾸는");
        setDescribe(1);
        break;
      default:
        break;
    }
  }, [describe]);

  useEffect(() => {
    setTimeout(() => changeDescribe(), 5000);
  }, [changeDescribe]);
  return (
    <IntroductionContent>
      <IntroductionText>
        안녕하세요! <br />
        {describeText} 개발자 이수동입니다.
      </IntroductionText>
    </IntroductionContent>
  );
};

export default Introduction;
