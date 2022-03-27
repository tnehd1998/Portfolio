import { Wrapper } from "./styles";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { blogState } from "../../store/blog";

const Title = styled.p`
  font-size: 4vw;
  text-align: center;
  margin: 2em 0;
`;

const Description = styled.p`
  font-size: 2vw;
  text-align: center;
  margin: 2em 0;
`;

const BlogList = styled.ul`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Blog = styled.li`
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

const Link = styled.a`
  text-decoration: none;
  width: 70vw;
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogNumber = styled.p`
  font-size: 3vw;
  width: 10%;
`;

const BlogTitle = styled.p`
  font-size: 1.5vw;
  width: 40%;
`;

const BlogComment = styled.p`
  font-size: 2vw;
  width: 50%;
`;

const BlogPage = () => {
  const blogs = useRecoilValue(blogState);
  return (
    <Wrapper>
      <Title>공유하고 싶은 좋은 글</Title>
      <Description>
        🤔스스로 생긴 질문🤔에 대한 🤩답변을 담고 있는 글 목록🤩
      </Description>
      <BlogList>
        {blogs.map((blog) => (
          <Blog>
            <Link href={blog.blogLink} target="_blank" rel="noreferrer">
              <BlogNumber>{`#${blog.blogId}`}</BlogNumber>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogComment>{`"${blog.question}"`}</BlogComment>
            </Link>
          </Blog>
        ))}
      </BlogList>
    </Wrapper>
  );
};

export default BlogPage;
