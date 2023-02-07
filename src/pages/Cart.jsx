import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart"></CommonSection>
    </Helmet>
  );
};

export default Cart;
