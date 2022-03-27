import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  border: 2px solid ${(props) => props.theme.textColor};
  margin: 1em;
  padding: 2em 1em;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  width: 70vw;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlogNumber = styled.p`
  font-size: 3vw;
  width: 10%;
`;

export const BlogTitle = styled.p`
  font-size: 1.5vw;
  width: 40%;
`;

export const BlogComment = styled.p`
  font-size: 2vw;
  width: 50%;
`;
