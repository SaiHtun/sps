import React from "react";
// components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
}
