import styled from "styled-components";

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

export const TechStackTitle = styled.p`
  font-size: 24px;
`;

export const TechStackItems = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 4rem;
  margin: 7rem 0;
`;
