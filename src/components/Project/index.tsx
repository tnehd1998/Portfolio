import { IProject } from "../../types/project.type";

import {
  Wrapper,
  Image,
  CommentWrapper,
  Title,
  Period,
  DescriptionsWrapper,
  Link,
  HashtagsWrapper,
} from "./styles";

const Project = ({
  imageUrl,
  title,
  period,
  descriptions,
  projectLink,
  hashtags,
}: IProject) => {
  return (
    <Wrapper>
      <Image src={imageUrl} />
      <CommentWrapper>
        <Title>{title}</Title>
        <Period>{period}</Period>
        <HashtagsWrapper>
          {hashtags.map((hashtag, index) => (
            <li key={index}>{"#" + hashtag}</li>
          ))}
        </HashtagsWrapper>
        <DescriptionsWrapper>
          {descriptions.map((description, index) => (
            <li key={index}>{"π " + description}</li>
          ))}
        </DescriptionsWrapper>
        <Link href={projectLink} target="_blank">
          &#8594; ν΄λΉ νλ‘μ νΈλ‘ μ΄λ
        </Link>
      </CommentWrapper>
    </Wrapper>
  );
};

export default Project;
