import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectItemImage = styled.img`
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

export const ProjectItemDescriptionContainer = styled.div`
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

export const ProjectItemHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectItemTitle = styled.p`
  font-size: 2.25em;
  margin-bottom: 0.75em;

  @media (max-width: 1150px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const ProjectItemPeriod = styled.p`
  font-size: 1.125em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }
`;

export const ProjectItemDescription = styled.ul`
  font-size: 1.375em;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin: 1em 0;
  }
`;

export const ProjectItemHashtags = styled.ul`
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

export const ProjectLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.125em;

  &:hover {
    color: white;
  }

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }
`;
