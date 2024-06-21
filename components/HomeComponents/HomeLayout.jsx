import React from "react";
import HomeFooter from "./HomeFooter";
import HomeNav from "./HomeNav";

function HomeLayout({ children }) {
  return (
    <>
      <HomeNav />
      <div>{children}</div>
      <HomeFooter />
    </>
  );
}

export default HomeLayout;
