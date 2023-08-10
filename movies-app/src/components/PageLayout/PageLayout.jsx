import React from "react";
import PropTypes from "prop-types";
import { PageLayoutContainer } from "./PageLayoutStyles";
import Navbar from "../Navbar/Navbar";

const PageLayout = ({ children }) => {
  return (
    <PageLayoutContainer>
      <Navbar />
      <main>{children}</main>
    </PageLayoutContainer>
  );
};

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.node,
};
