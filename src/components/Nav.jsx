import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
// constants
import { colors } from "../utilities/constants";

let navArray = ["profile", "services", "careers", "news", "contact"];

export default function Nav() {
  const [click, setClick] = useState(false);
  // const [openMenu, setOpenMenu] = useState(false);

  const Links = navArray.map((nav, i) => {
    if (nav === "profile") {
      return (
        <Link to="/" key={i}>
          <li>{nav}</li>
        </Link>
      );
    }
    return (
      <Link to={`/${nav}`} key={i}>
        <li>{nav}</li>
      </Link>
    );
  });

  const handleClick = () => {
    setClick(!click);
    // setOpenMenu(!openMenu);
  };

  return (
    <>
      <Navbar open={click}>
        <Container>
          <Hamburger clicked={click} onClick={handleClick}>
            <div className="box one"></div>
            <div className="box two"></div>
            <div className="box three"></div>
          </Hamburger>
          <Logo clicked={click}>
            <Name>SPS business group</Name>
          </Logo>
          <Menu>{Links}</Menu>
        </Container>
      </Navbar>
      <DropMenu open={click}>{Links}</DropMenu>
    </>
  );
}

const Navbar = styled.div`
  position: absolute;
  z-index: 200;
  height: 60px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  /* z-index: 100; */
  width: 100vw;
  height: 60px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media only screen and (max-width: 500px) {
    padding: 0px 20px;
  }
`;

const DropMenu = styled.ul`
  width: 100vw;
  min-height: 320px;
  height: max-content;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: absolute;
  z-index: 30;
  transform: translateY(-400px);
  transition: all 0.5s ease-in-out;

  &:first-child(a) {
    margin-top: 80px;
  }

  li {
    z-index: 100;
    font-size: 13px;
    padding: 20px 0px;
    /* border-bottom: 1px solid ${colors.secondary}; */
  }

  a {
    list-style: none;
    color: white;
    text-decoration: none;
    font-size: 14px;
  }

  ${(props) =>
    props.open &&
    css`
      transform: translateY(0);
      opacity: 0.8;
      backdrop-filter: blur(10px);
    `}
`;

const Logo = styled.div`
  opacity: ${(props) => (props.clicked ? 0 : 1)};
  transition: 0.5s ease-in-out;

  @media only screen and (max-width: 500px) {
    width: 200px;
    margin: 0 auto;
  }
`;

const Name = styled.h2`
  font-weight: 600;
`;

const Menu = styled.ul`
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  text-transform: uppercase;

  a {
    list-style: none;
    color: white;
    text-decoration: none;
    font-size: 13px;
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;

  .box {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: 0.5s ease-in-out;

    .two {
      transition-delay: 1s;
    }
  }

  ${(props) =>
    props.clicked &&
    css`
      .one {
        transform: rotate(40deg) translate(5px, 5px);
        /* width: 28px; */
      }
      .two {
        opacity: 0;
      }
      .three {
        transform: rotate(-40deg) translate(4px, -5px);
        /* width: 28px; */
      }
    `}

  @media only screen and (max-width: 900px) {
    display: flex;
    z-index: 100;
  }
`;
