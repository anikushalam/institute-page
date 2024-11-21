import LandingWrapper from "@/components/landing-wrapper";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LandingWrapper>{children}</LandingWrapper>
    </>
  );
};

export default Layout;
