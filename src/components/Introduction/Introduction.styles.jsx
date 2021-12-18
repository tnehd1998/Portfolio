import styled from "styled-components";

export const IntroductionContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 64px;
`;

export const IntroductionText = styled.h1`
  animation: changeColorText 5s infinite;
  background: transparent;
  @keyframes changeColorText {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;