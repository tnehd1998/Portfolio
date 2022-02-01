import styled from "styled-components";

export const Content = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em;
  @media (max-width: 1150px) {
    margin: 1em;
  }

  @media (max-width: 768px) {
    margin: 0.8em;
  }
`;

export const LogoImage = styled.img`
  width: 10vw;
  height: 10vw;
`;

export const TechStackItemTitle = styled.p`
  font-size: 1.5vw;
  margin: 2vh 0;

  @media (max-width: 1150px) {
    font-size: 2vw;
  }

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

export const TechStackItemLevel = styled.p`
  font-size: 1.5vw;
  margin-top: 1vh;
  @media (max-width: 1150px) {
    font-size: 2vw;
  }

  @media (max-width: 768px) {
    font-size: 2vw;
  }
`;

export const SkillBar = styled.div`
  width: 7rem;
  height: 7px;
  background-color: white;
  border-radius: 5px;
  @media (max-width: 1150px) {
    width: 5rem;
    height: 5px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3px;
  }
`;

export const SkillBarRange = styled.div`
  width: ${(props) => `${props.level}%`};
  height: 7px;
  border-radius: 5px 0px 0px 5px;
  background-color: ${(props) =>
    props.level >= 75
      ? "darkgreen"
      : props.level >= 60
      ? "greenyellow"
      : props.level >= 35
      ? "yellow"
      : "red"};
  @media (max-width: 1150px) {
    height: 5px;
    border-radius: 2px 0px 0px 2px;
  }

  @media (max-width: 768px) {
    height: 3px;
  }
`;
