import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;

export const ProjectItemImage = styled.img`
  width: 50vw;
  height: 50vh;
`;

export const ProjectItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 3rem;
  width: 30vw;
`;

export const ProjectItemHeading = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectItemTitle = styled.p`
  font-size: 36px;
  margin-bottom: 12px;
`;

export const ProjectItemPeriod = styled.p`
  font-size: 18px;
`;

export const ProjectItemDescription = styled.ul`
  font-size: 22px;
`;

export const ProjectItemHashtags = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`;
