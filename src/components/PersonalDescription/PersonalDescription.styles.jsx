import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
`;

export const CommentContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const DescriptionComment = styled.p`
  font-size: 24px;
`;

export const FaceAndName = styled.div`
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

export const FaceImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

export const FaceDescription = styled.p`
  margin-top: 1rem;
  font-size: 24px;
`;
