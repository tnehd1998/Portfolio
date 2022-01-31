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
          더 나은 삶을 위해 고민하는 🧑🏻‍💻프론트엔드 개발자🧑🏻‍💻 이수동입니다.
        </DescriptionComment>
        <DescriptionComment>
          개발자의 입장이 아닌 사용자의 입장으로써 정말 필요로 하는 기능과
          프로그램을 1순위로 두고 개발을 하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          꾸준함과 성장의 연관성을 잘 알기 때문에 개인 프로젝트를 통해 새로운
          기술을 접해보며 성장하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          아름다운 사람이 지나간 자리는 지나간 자리도 아름답다는 말을 인상깊게
          새겨들어, 코드를 짠 후 항상 리팩토링 과정을 통해 언제든지 확장할 수
          있도록 유지보수하고 있습니다.
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
