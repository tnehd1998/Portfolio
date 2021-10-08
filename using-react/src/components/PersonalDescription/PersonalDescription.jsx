import React from "react";
import Face from "../../assets/images/profile.jpeg";
import styled from "styled-components";

const PersonalDescriptionContainer = styled.div`
  padding-top: 20vh;
  height: 100%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
`;

const CommentTitle = styled.div`
  font-size: 32px;
  text-align: center;
`;

const CommentContainer = styled.div`
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DescriptionComment = styled.p`
  font-size: 24px;
`;

const FaceImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;

const TechStackItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-top: 100px;
`;

const PersonalDescription = () => {
  return (
    <PersonalDescriptionContainer>
      <CommentTitle>About Me</CommentTitle>
      <DescriptionContainer>
        <CommentContainer>
          <DescriptionComment>
            안녕하세요! 개발과 야구를 사랑하는 프론트엔드 개발자 이수동입니다.
          </DescriptionComment>
          <DescriptionComment>
            개발을 잘하는 개발자보다 꾸준한 개발자가 되기 위해 노력중입니다.
          </DescriptionComment>
          <DescriptionComment>
            꾸준함의 중요성을 잘 알기 때문에 1일 1커밋 운동을 하고 있습니다.
          </DescriptionComment>
          <DescriptionComment>
            무작정 작동하는 코드보다 효율적인 코드를 짜기위해 항상 고민하고
            있습니다.
          </DescriptionComment>
        </CommentContainer>
        <FaceImage src={Face} alt="Face" />
      </DescriptionContainer>
      <CommentTitle>Tech Stack</CommentTitle>
      <TechStackContainer>
        <TechStackItems>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </TechStackItems>
      </TechStackContainer>
    </PersonalDescriptionContainer>
  );
};

export default PersonalDescription;
