import React from "react";
import { Footer } from "../components/home";

const Layout = ({ children }: any) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
