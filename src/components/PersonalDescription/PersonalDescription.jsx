import React from "react";
import Face from "../../assets/images/profile.jpeg";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;

const CommentContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DescriptionComment = styled.p`
  font-size: 24px;
`;

const FaceAndName = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 24px;
  background: linear-gradient(#ffffff 50%, rgba(255, 255, 255, 0) 0) 0 0,
    radial-gradient(circle closest-side, #ffffff 53%, rgba(255, 255, 255, 0) 0)
      0 0,
    radial-gradient(circle closest-side, #ffffff 50%, rgba(255, 255, 255, 0) 0)
      55px 0 #48b;
  background-size: 110px 200px;
  background-repeat: repeat-x;
`;

const FaceImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

const FaceDescription = styled.p`
  margin-top: 1rem;
  font-size: 24px;
`;

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
          무작정 작동하는 코드보다 효율적인 코드🧮를 짜기위해 항상 고민하고
          있습니다.
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
