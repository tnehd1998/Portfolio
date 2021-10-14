import styled from "styled-components";

export const CareerItemContainer = styled.li`
  width: 50vw;
  display: flex;
  border: 5px solid white;
  border-radius: 10px;
  padding: 10px;
  padding-right: 300px;
  margin: 1rem 0;
`;

export const CareerItemImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const CareerItemDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const CareerItemTitle = styled.p`
  font-size: 24px;
`;

export const CareerItemPeriod = styled.p`
  font-size: 18px;
`;
