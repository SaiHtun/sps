import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js";
// utilities
import { colors } from "../utilities/constants";

// datasets & labels
const labels = [
  "Mandalay",
  "Yangon",
  "Mawlamyine",
  "Taunggyi",
  "Meikthila",
  "Kalay",
  "Lashio",
  "Monywa",
  "Kachin",
  "Magway",
];

const data = [452, 1563, 256, 266, 231, 120, 121, 422, 488, 75];

const bgColors = [
  "yellow",
  "red",
  "brown",
  "skyblue",
  "green",
  "teal",
  "pink",
  "salmon",
  "orange",
  "slateblue",
  "grey",
];

export default function Charts() {
  const chartRef = useRef();
  const raderRef = useRef();
  const pieRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const myRaderRef = raderRef.current.getContext("2d");
    const myPieRef = pieRef.current.getContext("2d");
    // chart
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Clients",
            data: data,
            fill: false,
            pointBackgroundColor: "slateblue",
            borderColor: colors.green,
            backgroundColor: bgColors,
          },
        ],
      },
      options: {
        tooltips: {
          mode: "nearest",
        },
        animation: {
          duration: 2000,
          easing: "easeInOutExpo",
        },

        // customize chart options
      },
    });
    // pie
    new Chart(myPieRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Clients",
            data: data,
            fill: false,
            backgroundColor: bgColors,
          },
        ],
      },
      options: {
        tooltips: {
          mode: "nearest",
        },
        animation: {
          duration: 1000,
          easing: "easeInOutExpo",
        },
        maintainAspectRatio: false,
        // customize chart options
      },
    });
    // rader
    new Chart(myRaderRef, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Clients",
            data: data,
            fill: false,
            borderColor: colors.green,
            backgroundColor: bgColors,
          },
        ],
      },
      options: {
        tooltips: {
          mode: "nearest",
        },
        animation: {
          duration: 1000,
          easing: "easeInOutExpo",
        },
        maintainAspectRatio: false,
        // customize chart options
      },
    });
  }, []);

  return (
    <ChartsContainer>
      <Title>Endless growing clients accross the country.</Title>
      <Wrapper>
        <PieWrapper>
          <canvas ref={pieRef}></canvas>
        </PieWrapper>
        <RaderWrapper>
          <canvas ref={raderRef}></canvas>
        </RaderWrapper>
      </Wrapper>
      <ChartWrapper>
        <canvas ref={chartRef}></canvas>
      </ChartWrapper>
    </ChartsContainer>
  );
}

const ChartsContainer = styled.div`
  min-height: 600px;
  height: max-content;
  margin: 50px 0px;
  overflow-x: hidden;
  background-color: white;
`;

const ChartWrapper = styled.div``;

const Title = styled.h1`
  display: inline-block;
  width: 200px;
  line-height: 20px;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2px;
    margin-left: 50px;
    background-color: grey;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
  min-height: 300px;
  height: max-content;

  @media only screen and (max-width: 1000px) {
    min-height: 550px;
    flex-direction: column;
    gap: 70px;
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 50px;
    height: 500px;
  }
`;

const RaderWrapper = styled.div`
  flex: 1;
  height: 300px;

  @media only screen and (max-width: 500px) {
    height: 500px;
  }
`;

const PieWrapper = styled.div`
  flex: 1;
  height: 300px;

  @media only screen and (max-width: 500px) {
    height: 500px;
  }
`;
