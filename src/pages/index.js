import React, { useEffect } from "react";
import "./index.css";
import styled from "styled-components";
// component\
import MainLayout from "../layouts/MainLayout";
import Info from "../components/Info";
// awesome slider
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// colors
import { colors } from "../utilities/constants";
// aos
import AOS from "aos";
import "aos/dist/aos.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <MainLayout>
      {/* hero sliders */}
      <Container>
        <AutoplaySlider cancelOnInteraction={false} interval={6000}>
          <div data-src="/subsidiaries/sub1.JPG" />
          <div data-src="/subsidiaries/sub2.JPG" />
          <div data-src="/subsidiaries/sub3.JPG" />
        </AutoplaySlider>
      </Container>
      {/* Infos */}
      {infos.map((info, i) => {
        return <Info key={i} info={info} data-aos="fade-in"></Info>;
      })}
    </MainLayout>
  );
};

export default IndexPage;

const Container = styled.div`
  .awssld__wrapper {
    position: relative;
    height: 600px;
  }

  .awssld__bullets {
    position: absolute;
    bottom: 50px;
    z-index: 10;

    button {
      margin-right: 20px;
      background-color: white;
    }
  }
`;

const infos = [
  {
    title: "About Us",
    header: "SPS Technology Co.,ltd.",
    paraOne:
      "established in September 2010. The company headquartered in No.130, 7th floor, 23rd Street, Upper Block, Latha Township, Yangon, Myanmar. Our company’s core business is in both retail, wholesales and distributions for multi-brand of mobile phone and it’s accessories, spare parts.",
    bgColor: "white",
  },
  {
    title: "History",
    header: "Since 2000,",
    paraOne:
      "before we started to reform SPS Co., Ltd, we were in electronic business as “SPS Electronics“ in Yangon doing both retail and whole sales. In 2012, We proudly gained successful customer relationship and decided to expend our business into Mobile Phone Business Industry.",
    paraTwo:
      "Our sales and success in Mobile Phone industry is increasing amazing. In 2016, we became the master dealer of MEIZU smart phones. We do selling as well as giving well after service to meet customer satisfaction. As our Business extension and uprising the sales-forces, maximizing the customers and interrelationship, we emphasized the business mostly on Wholesale and Distribution channel. So we established our MMD Distribution Channel to both upper and lower Myanmar in 2017.",
    bgColor: colors.green,
    height: "true",
  },
  {
    title: "Our Values",
    header: "Customers fulfillment;",
    list: [
      "We put our customers first.",
      "We act with honesty",
      "We keep things simple",
      "We do what we say.",
    ],
    bgColor: "white",
  },
  {
    title: "Mission and Vision",
    header: "We are looking forward,",
    paraOne:
      "for the success of employees, the success of business partners and also the success of company by friendly smile, authentic quality and advance technology.",
    paraTwo:
      "We are moving unitedly forward with the best performance, the best service, and the best organization to get the greatest success in Myanmar Market.",
    bgColor: colors.grey,
    height: "true",
  },
];
