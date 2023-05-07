import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="max-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
