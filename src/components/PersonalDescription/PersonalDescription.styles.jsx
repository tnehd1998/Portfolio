import styled from "styled-components";

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80vh;

  @media (max-width: 1150px) {
    height: 70vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 8em;
    text-align: center;
    height: 60vh;
    margin-top: 3em;
  }
`;

export const CommentContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 1150px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

export const DescriptionComment = styled.p`
  font-size: 1.5em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const FaceAndName = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 2px solid ${(props) => props.theme.textColor};

  @media (max-width: 1150px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const FaceImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;

  @media (max-width: 1150px) {
    width: 10rem;
    height: 10rem;
  }
`;

export const FaceDescription = styled.p`
  margin-top: 1rem;
  font-size: 24px;
`;
