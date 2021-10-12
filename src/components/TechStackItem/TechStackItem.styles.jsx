import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const TechStackItemTitle = styled.p`
  font-size: 16px;
  margin: 2rem 0;
`;

export const TechStackItemLevel = styled.p`
  font-size: 12px;
  margin-top: 1rem;
`;

export const SkillBar = styled.div`
  width: 5rem;
  height: 5px;
  background-color: white;
  border-radius: 2px;
`;

export const SkillBarRange = styled.div`
  width: ${(props) => `${props.level}%`};
  height: 5px;
  border-radius: 2px 0px 0px 2px;
  background-color: ${(props) =>
    props.level > 70 ? "green" : props.level > 40 ? "yellow" : "red"};
`;
