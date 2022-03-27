import { Wrapper } from "./styles";
import styled from "styled-components";

const BlogList = styled.ul`
  margin-top: 1em;
  text-align: center;
`;

const Title = styled.div`
  font-size: 4vw;
  text-align: center;
  margin: 2em 0;
`;

const Blog = styled.li`
  display: flex;
  border: 2px solid ${(props) => props.theme.textColor};
  margin: 4em;
  padding: 2em;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.125em;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1150px) {
    font-size: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.75em;
    margin-bottom: 0.75em;
  }
`;

const BlogPage = () => {
  return (
    <Wrapper>
      <Title>인상 깊에 읽은 글</Title>
      <BlogList>
        <Blog>
          <Link
            href="https://techblog.woowahan.com/6339/"
            target="_blank"
            rel="noreferrer"
          >
            <h1>#1</h1>
            <h1>Store에서 비동기 통신 분리하기 (feat. React Query)</h1>
            <h3>
              상태관리에서 "비동기 데이터 처리를 어떻게 하면 좋을까?" 에 대해
              고민을 하다가 해답을 찾게 해준 글
            </h3>
          </Link>
        </Blog>
      </BlogList>
    </Wrapper>
  );
};

export default BlogPage;
