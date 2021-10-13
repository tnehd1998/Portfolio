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

export const ProjectItemTitle = styled.p`
  font-size: 36px;
`;

export const ProjectItemDescription = styled.p`
  font-size: 24px;
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
  }
`;
