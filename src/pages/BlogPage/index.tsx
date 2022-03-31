import { Wrapper } from "./styles";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { blogState } from "../../store/blog";
import Blog from "../../components/Blog";

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

const BlogPage = () => {
  const blogs = useRecoilValue(blogState);
  return (
    <Wrapper>
      <Title>공유하고 싶은 좋은 글/영상</Title>
      <Description>
        🤔스스로 생긴 질문🤔에 대한 🤩답변을 담고 있는 글/블로그 목록🤩
      </Description>
      <BlogList>
        {blogs.map((blog) => (
          <Blog
            blogId={blog.blogId}
            blogLink={blog.blogLink}
            title={blog.title}
            question={blog.question}
          />
        ))}
      </BlogList>
    </Wrapper>
  );
};

export default BlogPage;
