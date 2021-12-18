import React from "react";

import {
  DescriptionContainer,
  CommentContainer,
  DescriptionComment,
  FaceAndName,
  FaceImage,
  FaceDescription,
} from "./PersonalDescription.styles.jsx";

const PersonalDescription = () => {
  return (
    <DescriptionContainer>
      <CommentContainer>
        <DescriptionComment>
          개발과 야구를 사랑하는 🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻 이수동입니다.
        </DescriptionComment>
        <DescriptionComment>
          개발을 잘하는 개발자보다 ⏳꾸준한 개발자⏳가 되기 위해 노력중입니다.
        </DescriptionComment>
        <DescriptionComment>
          꾸준함의 중요성을 잘 알기 때문에 🌱1일 1커밋 운동🌱을 하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          무작정 작동하는 코드보다 🧹클린코드🧹를 지향하고 있습니다.
        </DescriptionComment>
      </CommentContainer>
      <FaceAndName>
        <FaceImage
          src={
            "https://user-images.githubusercontent.com/72953316/139514536-30a9a42d-e77f-4912-b7b0-b591ad362e91.jpeg"
          }
          alt="Face"
        />
        <FaceDescription>이수동 a.k.a. Billy</FaceDescription>
      </FaceAndName>
    </DescriptionContainer>
  );
};

export default PersonalDescription;
