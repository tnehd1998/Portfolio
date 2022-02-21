import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactWrapper = styled.div`
  width: 26em;
  height: 26em;
  border-radius: 25%;
  border: 1px solid ${(props) => props.theme.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    width: 22em;
    height: 22em;
  }

  @media (max-width: 768px) {
    width: 18em;
    height: 18em;
  }
`;

export const Title = styled.p`
  font-size: 2.6em;

  @media (max-width: 1150px) {
    font-size: 2.2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Image = styled.img`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  margin: 1em 0;

  @media (max-width: 1150px) {
    width: 8em;
    height: 8em;
  }

  @media (max-width: 768px) {
    width: 6em;
    height: 6em;
  }
`;

export const Description = styled.p`
  font-size: 1.125em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const ContactLinkWrapper = styled.div`
  display: flex;
  width: 6em;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1em;

  @media (max-width: 1150px) {
    width: 5em;
    margin-top: 0.8em;
  }

  @media (max-width: 768px) {
    width: 4em;
    margin-top: 0.6em;
  }
`;

export const ContactLink = styled.a`
  font-size: 2.5em;
  color: ${(props) =>
    props.item === "github" ? props.theme.textColor : "#0D65C2"};

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 1150px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;
