import React from "react";

import {
  DescriptionContainer,
  CommentContainer,
  DescriptionComment,
  FaceAndName,
  FaceImage,
  FaceDescription,
} from "./PersonalDescription.styles.jsx";
import Face from "../../assets/images/profile.jpeg";

const PersonalDescription = () => {
  return (
    <DescriptionContainer>
      <CommentContainer>
        <DescriptionComment>
          안녕하세요! 개발🧑🏻‍💻과 야구⚾️를 사랑하는 프론트엔드 개발자
          이수동입니다.
        </DescriptionComment>
        <DescriptionComment>
          개발을 잘하는 개발자보다 꾸준한 개발자⏳가 되기 위해 노력중입니다.
        </DescriptionComment>
        <DescriptionComment>
          꾸준함의 중요성을 잘 알기 때문에 🌱1일 1커밋 운동🌱을 하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          무작정 작동하는 코드보다 효율적🧮이고 클린한🧹 코드를 짜기위해 항상
          고민하고 있습니다.
        </DescriptionComment>
      </CommentContainer>
      <FaceAndName>
        <FaceImage src={Face} alt="Face" />
        <FaceDescription>Billy the Coder</FaceDescription>
      </FaceAndName>
    </DescriptionContainer>
  );
};

export default PersonalDescription;
