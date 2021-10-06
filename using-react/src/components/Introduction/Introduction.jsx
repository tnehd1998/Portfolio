import React, { useEffect, useState } from "react";
import styled from "styled-components";

const IntroductionContent = styled.div`
  height: 100vh;
  background: rgb(22, 230, 220);
  background: linear-gradient(
    83deg,
    rgba(22, 230, 220, 1) 32%,
    rgba(14, 125, 233, 1) 75%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

const IntroductionText = styled.h1`
  animation: changeColorText 5s infinite;
  @keyframes changeColorText {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Introduction = () => {
  const [describe, setDescribe] = useState(1);
  const [describeText, setDescibeText] = useState("꿈꾸는");

  const changeDescribe = () => {
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
  };

  const repeatDescribe = () => {
    setTimeout(changeDescribe, 5000);
  };

  useEffect(() => {
    repeatDescribe();
  }, [repeatDescribe]);
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
