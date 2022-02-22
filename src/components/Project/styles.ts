import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 50em;
  height: 30em;

  @media (max-width: 1150px) {
    width: 30em;
    height: 18em;
  }

  @media (max-width: 768px) {
    width: 25em;
    height: 20em;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  width: 30vw;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const Title = styled.p`
  font-size: 2.25em;

  @media (max-width: 1150px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Period = styled.p`
  font-size: 1.125em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }
`;

export const HashtagsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;

  @media (max-width: 1150px) {
    font-size: 0.75em;
  }

  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export const DescriptionsWrapper = styled.ul`
  font-size: 1.375em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin: 1em 0;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  font-size: 1.125em;

  &:hover {
    color: ${(props) => props.theme.headerColor};
  }

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }
`;
