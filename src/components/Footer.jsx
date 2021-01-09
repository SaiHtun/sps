import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <FaFacebook style={{ color: "#1877f2", fontSize: "20px" }}></FaFacebook>
        <FaInstagram
          style={{ color: "#8a3ab9", fontSize: "20px" }}
        ></FaInstagram>
      </SocialMedia>
      <CompanyName>
        SPS <span>business group</span> © 2021
      </CompanyName>
      <VoilaSoft>Powered by VoilaSoft</VoilaSoft>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 50px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media only screen and (max-width: 550px) {
    grid-template-columns: 80px 1fr 1fr;
  }
`;

const SocialMedia = styled.h3`
  display: flex;
  gap: 10px;
`;

const CompanyName = styled.h3`
  font-size: 14px;
  color: grey;

  @media only screen and (max-width: 550px) {
    font-size: 12px;
    span {
      display: none;
    }
  }
`;

const VoilaSoft = styled.h3`
  font-style: italic;
  font-size: 14px;
  color: grey;

  @media only screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
