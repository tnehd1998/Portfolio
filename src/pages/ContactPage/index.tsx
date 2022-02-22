import React from "react";
import {
  Wrapper,
  ContactWrapper,
  Title,
  Image,
  Description,
  ContactLinkWrapper,
  ContactLink,
} from "./styles";

const ContactPage = () => {
  return (
    <Wrapper>
      <ContactWrapper>
        <Title>✉️ Contact Me ✉️</Title>
        <Image
          src={
            "https://user-images.githubusercontent.com/72953316/139514536-30a9a42d-e77f-4912-b7b0-b591ad362e91.jpeg"
          }
        />
        <Description>이름 : 이수동</Description>
        <Description>이메일 : tnehd1998@naver.com</Description>
        <ContactLinkWrapper>
          <ContactLink
            href="https://github.com/tnehd1998"
            target="_blank"
            item={"github"}
          >
            <i className="fab fa-github"></i>
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/%EC%88%98%EB%8F%99-%EC%9D%B4-45142a220/"
            target="_blank"
            item={"linkedIn"}
          >
            <i className="fa fa-linkedin-square"></i>
          </ContactLink>
        </ContactLinkWrapper>
      </ContactWrapper>
    </Wrapper>
  );
};

export default ContactPage;
