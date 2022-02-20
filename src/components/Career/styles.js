import styled from "styled-components";

export const Wrapper = styled.li`
  width: 80vw;
  display: flex;
  border: 3px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  padding: 10px;
`;

export const Logo = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  margin-right: 30px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Name = styled.p`
  font-size: 3vw;
`;

export const Period = styled.p`
  font-size: 2vw;
`;
