import React from "react";
import styled from "styled-components";
// components
import MainLayout from "../layouts/MainLayout";
import MyanmarMap from "../assets/mmap.svg";
// utilities
import { colors } from "../utilities/constants";
import Charts from "../components/Charts";

export default function Services() {
  return (
    <MainLayout>
      <ServicesContainer>
        <Hero>
          <HeroMsg>Our Professional Sales & Services.</HeroMsg>
        </Hero>
        <OfficeCoverage>
          <Header>
            <Title>Regional Offices & Coverage</Title>
            <MapInfo>
              <Coverage>
                <span role="img" aria-label="emoji">
                  📌{" "}
                </span>{" "}
                Coverage
              </Coverage>
              <Office>
                <span role="img" aria-label="emoji">
                  {" "}
                  🏢{" "}
                </span>{" "}
                Office
              </Office>
            </MapInfo>
          </Header>
          <MapWrapper>
            <MyanmarMap className="mmap"></MyanmarMap>
          </MapWrapper>
          {/* charts */}
          <Charts></Charts>
        </OfficeCoverage>
        <Brands></Brands>
      </ServicesContainer>
    </MainLayout>
  );
}

const ServicesContainer = styled.div``;

const Hero = styled.div`
  width: 100vw;
  height: 500px;
  background-color: ${colors.green};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroMsg = styled.h2`
  display: inline-block;
  width: 350px;
  font-size: 50px;
  font-weight: 600;
  margin-left: 100px;
  color: white;

  @media only screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

const OfficeCoverage = styled.div`
  width: 100%;
  min-height: 700px;
  height: max-content;
  padding: 50px 100px;
  background-color: white;
  position: relative;

  .maplabels1 {
    text-transform: uppercase;
  }

  .city {
    color: #b4b3b3;
  }

  @media only screen and (max-width: 800px) {
    padding: 50px 40px;
  }

  @media only screen and (max-width: 500px) {
    padding: 50px 20px;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    justify-content: flex-start;

    .mmap {
      position: absolute;
      left: -180px;
    }
  }
  @media only screen and (max-width: 400px) {
    .mmap {
      position: absolute;
      left: -225px;
    }
  }
`;

const Title = styled.h2`
  display: inline-block;
  width: 200px;
  line-height: 20px;
  position: relative;
  letter-spacing: 3px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    margin-left: 100px;
    background-color: grey;
  }
`;

const Brands = styled.div`
  width: 100%;
  height: 500px;
  background-color: teal;
`;

const Coverage = styled.p`
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 5px 0;
`;

const Office = styled.p`
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const MapInfo = styled.div``;
