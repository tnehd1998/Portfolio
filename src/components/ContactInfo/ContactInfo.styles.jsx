import styled from "styled-components";

export const ContactInfoContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactBackground = styled.div`
  width: 26rem;
  height: 26rem;
  border-radius: 25%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactTitle = styled.p`
  font-size: 44px;
`;

export const FaceImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
`;

export const ContactInfoDescription = styled.p`
  font-size: 18px;
`;

export const ContactLinkContainer = styled.div`
  display: flex;
  width: 5rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
`;

export const ContactLinkIcon = styled.a`
  font-size: 36px;
  color: ${(props) => (props.item === "github" ? "black" : "#0D65C2")};

  &:hover {
    transform: scale(1.2);
  }
`;
