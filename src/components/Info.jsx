import React, { useEffect } from "react";
import styled from "styled-components";
import RecOne from "../assets/RecOne.svg";
import RecTwo from "../assets/RecTwo.svg";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Info(props) {
  useEffect(() => {
    AOS.init({
      duration: 2500,
    });
  }, []);

  const { title, header, paraOne, bgColor } = props.info;

  return (
    <InfoContainer
      height={props.info.height}
      style={{ backgroundColor: bgColor }}
      isMis={title === "Mission and Vision" ? true : false}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {title === "Mission and Vision" ? (
        <TitleWrapper>
          <Mission
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            <p>Mission</p>
            <p>and Vision</p>
          </Mission>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-delay="530"
          >
            <RecTwo></RecTwo>
          </div>
        </TitleWrapper>
      ) : (
        <TitleWrapper>
          <Title
            height={props.info.height}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="500"
          >
            {title}
          </Title>
          {props.info.height ? (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-delay="530"
            >
              <RecOne></RecOne>
            </div>
          ) : (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="2000"
              data-aos-delay="530"
            >
              <RecTwo></RecTwo>
            </div>
          )}
        </TitleWrapper>
      )}
      <Message data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
        <Header>{header}</Header>
        {props.info.list ? (
          <ul style={{ color: props.info.height ? "white" : "grey" }}>
            {props.info.list.map((l, i) => {
              return <li key={i}>{l}</li>;
            })}
          </ul>
        ) : (
          <>
            <Para height={props.info.height}>{paraOne}</Para>
            {props.info.paraTwo && (
              <Para
                height={props.info.height}
                style={{ marginTop: "5px", textIndent: "45px" }}
              >
                {props.info.paraTwo}
              </Para>
            )}
          </>
        )}
      </Message>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  padding: 0px 100px;
  margin: 50px 0px;
  margin-bottom: ${(props) => (props.isMis ? "0px !important" : "50px")};
  height: ${(props) => (props.height ? "700px" : "500px")};
  color: ${(props) => (props.height ? "white" : "black")};
  line-height: 150%;
  display: grid;
  grid-template-columns: 500px auto;
  align-content: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 300px auto;
  }
  @media only screen and (max-width: 860px) {
    grid-template-columns: auto;
  }
  @media only screen and (max-width: 500px) {
    padding: 0px 20px;
    height: ${(props) => (props.height ? "750px" : "400px")};
  }
`;

const Title = styled.h3`
  letter-spacing: 3px;
  position: relative;
  font-size: 18px;

  @media only screen and (max-width: 860px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 50px;
  }

  ::after {
    content: "";
    position: absolute;
    top: 12px;
    margin-left: 15px;
    width: 50%;
    height: 2px;
    background-color: ${(props) => (props.height ? "white" : "grey")};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Message = styled.div``;

const Mission = styled.div`
  letter-spacing: 3px;
  position: relative;

  @media only screen and (max-width: 860px) {
    margin-bottom: 30px;
  }

  ::after {
    content: "";
    position: absolute;
    top: 12px;
    margin-left: 120px;
    width: 50%;
    height: 2px;
    background-color: grey;
  }
`;

const Header = styled.h2`
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
`;

const Para = styled.p`
  word-spacing: 2px;
  text-indent: 45px;
  display: inline-block;
  color: ${(props) => (props.height ? "rgba(255,255,255,0.8)" : "#585858")};
`;
