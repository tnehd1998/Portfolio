import { IBlog } from "../../types/blog.type";
import { Wrapper, Link, BlogNumber, BlogTitle, BlogComment } from "./styles";

const Blog = ({ blogLink, blogId, title, question }: IBlog) => {
  return (
    <Wrapper>
      <Link href={blogLink} target="_blank" rel="noreferrer">
        <BlogNumber>{`#${blogId}`}</BlogNumber>
        <BlogTitle>{title}</BlogTitle>
        <BlogComment>{`"${question}"`}</BlogComment>
      </Link>
    </Wrapper>
  );
};

export default Blog;
