import React from "react";

import {
  ContactInfoContainer,
  ContactBackground,
  ContactTitle,
  FaceImage,
  ContactInfoDescription,
  ContactLinkContainer,
  ContactLinkIcon,
} from "./ContactInfo.styles.jsx";
import Face from "../../assets/images/profile.jpeg";

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <ContactBackground>
        <ContactTitle>✉️ Contact Me ✉️</ContactTitle>
        <FaceImage src={Face} />
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
            <i className="fab fa-github"></i>
          </ContactLinkIcon>
          <ContactLinkIcon
            href="https://www.linkedin.com/in/%EC%88%98%EB%8F%99-%EC%9D%B4-45142a220/"
            target="_blank"
            item={"linkedIn"}
          >
            <i className="fa fa-linkedin-square"></i>
          </ContactLinkIcon>
        </ContactLinkContainer>
      </ContactBackground>
    </ContactInfoContainer>
  );
};

export default ContactInfo;
