import React from "react";

import {
  Wrapper,
  Image,
  CommentWrapper,
  Title,
  Period,
  DescriptionsWrapper,
  Link,
  HashtagsWrapper,
} from "./styles.js";

const Project = ({
  imageUrl,
  title,
  period,
  descriptions,
  projectLink,
  hashtags,
}) => {
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
            <li key={index}>{"📌 " + description}</li>
          ))}
        </DescriptionsWrapper>
        <Link href={projectLink} target="_blank">
          &#8594; 해당 프로젝트로 이동
        </Link>
      </CommentWrapper>
    </Wrapper>
  );
};

export default Project;
