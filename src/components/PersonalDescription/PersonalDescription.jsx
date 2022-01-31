import React from "react";

import {
  DescriptionContainer,
  CommentContainer,
  DescriptionComment,
} from "./PersonalDescription.styles.jsx";

const PersonalDescription = () => {
  return (
    <DescriptionContainer>
      <CommentContainer>
        <DescriptionComment>
          📌 🧑🏻‍💻더 나은 삶을 위해 고민하는 프론트엔드 개발자🧑🏻‍💻
          이수동입니다.
        </DescriptionComment>
        <DescriptionComment>
          📌 개발자의 입장이 아닌 ⭐️사용자의 입장으로써 정말 필요로 하는 기능과
          프로그램을 1순위⭐️로 두고 개발을 하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          📌 🖇꾸준함과 성장의 연관성🖇을 잘 알기 때문에 📚매일 개인 프로젝트를
          진행하면서 성장📚하고 있습니다.
        </DescriptionComment>
        <DescriptionComment>
          📌 "아름다운 사람들은 머문 자리도 아름답다" - 토스 Slash 21 컨퍼런스
          (진유림님)
        </DescriptionComment>
        <DescriptionComment>
          📌 해당 말을 인상깊게 새겨들어, 코드를 짠 후 항상 리팩토링 과정을 통해
          🗂확장성이 좋은 코드로 유지보수🗂하고 있습니다.
        </DescriptionComment>
      </CommentContainer>
    </DescriptionContainer>
  );
};

export default PersonalDescription;
