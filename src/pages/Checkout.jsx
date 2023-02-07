import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Checkout = () => {
  return (
    <Helmet>
      <CommonSection title="Checkout" />
    </Helmet>
  );
};

export default Checkout;
