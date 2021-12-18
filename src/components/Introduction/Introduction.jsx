import React, { useCallback, useEffect, useState } from "react";
import {
  IntroductionContent,
  IntroductionText,
} from "./Introduction.styles.jsx";

const Introduction = () => {
  const [describe, setDescribe] = useState(1);
  const [describeFirstLineText, setDescribeFirstLineText] =
    useState("개발과 야구를 사랑하는");
  const [describeSecondLineText, setDescribeSecondLineText] = useState(
    "🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻"
  );
  const [describeThirdLineText, setDescribeThirdLineText] =
    useState("이수동입니다.");

  const changeDescribe = useCallback(() => {
    switch (describe) {
      case 1:
        setDescribeFirstLineText("개발을 잘하는 개발자보다");
        setDescribeSecondLineText("⏳꾸준한 개발자⏳");
        setDescribeThirdLineText("되기 위해 노력중입니다.");
        setDescribe(2);
        break;
      case 2:
        setDescribeFirstLineText("꾸준함의 중요성을 잘 알기 때문에");
        setDescribeSecondLineText("🌱1일 1커밋 운동🌱");
        setDescribeThirdLineText("하고 있습니다.");
        setDescribe(3);
        break;
      case 3:
        setDescribeFirstLineText("무작정 작동하는 코드보다");
        setDescribeSecondLineText("🧹클린코드🧹");
        setDescribeThirdLineText("지향하고 있습니다.");
        setDescribe(4);
        break;
      case 4:
        setDescribeFirstLineText(`개발과 야구를 사랑하는`);
        setDescribeSecondLineText(`🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻`);
        setDescribeThirdLineText(`이수동입니다.`);
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
      <IntroductionText>{describeFirstLineText}</IntroductionText>
      <IntroductionText>{describeSecondLineText}</IntroductionText>
      <IntroductionText>{describeThirdLineText}</IntroductionText>
    </IntroductionContent>
  );
};

export default Introduction;
