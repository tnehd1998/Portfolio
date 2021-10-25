import React, { useCallback, useEffect, useState } from "react";
import {
  IntroductionContent,
  IntroductionText,
} from "./Introduction.styles.jsx";

const Introduction = () => {
  const [describe, setDescribe] = useState(1);
  const [describeText, setDescribeText] = useState("꿈꾸는");

  const changeDescribe = useCallback(() => {
    switch (describe) {
      case 1:
        setDescribeText("노력하는");
        setDescribe(2);
        break;
      case 2:
        setDescribeText("즐기는");
        setDescribe(3);
        break;
      case 3:
        setDescribeText("발전하는");
        setDescribe(4);
        break;
      case 4:
        setDescribeText("꿈꾸는");
        setDescribe(1);
        break;
      default:
        break;
    }
  }, [describe]);

  useEffect(() => {
    const timer = setTimeout(() => changeDescribe(), 5000);
    return () => {
      clearTimeout(timer);
    };
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
