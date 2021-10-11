import React from "react";
import styled from "styled-components";
import Face from "../../assets/images/profile.jpeg";

const ContactInfoContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactBackground = styled.div`
  width: 26rem;
  height: 26rem;
  border-radius: 25%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactTitle = styled.p`
  font-size: 44px;
`;

const FaceImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
`;

const ContactInfoDescription = styled.p`
  font-size: 18px;
`;

const ContactLinkContainer = styled.div`
  display: flex;
  width: 5rem;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
`;

const ContactLinkIcon = styled.a`
  font-size: 36px;
  color: ${(props) => (props.item === "github" ? "black" : "#0D65C2")};

  &:hover {
    transform: scale(1.2);
  }
`;

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <ContactBackground>
        <ContactTitle>✉️ Contact Me ✉️</ContactTitle>
        <FaceImage src={Face} alt="" />
        <ContactInfoDescription>이름 : 이수동</ContactInfoDescription>
        <ContactInfoDescription>
          이메일 : tnehd1998@naver.com
        </ContactInfoDescription>
        <ContactLinkContainer>
          <ContactLinkIcon
            href="https://github.com/tnehd1998"
            target="_blank"
            item={"github"}
          >
            <i class="fab fa-github"></i>
          </ContactLinkIcon>
          <ContactLinkIcon
            href="https://www.linkedin.com/in/%EC%88%98%EB%8F%99-%EC%9D%B4-45142a220/"
            target="_blank"
            item={"linkedIn"}
          >
            <i class="fa fa-linkedin-square"></i>
          </ContactLinkIcon>
        </ContactLinkContainer>
      </ContactBackground>
    </ContactInfoContainer>
  );
};

export default ContactInfo;
