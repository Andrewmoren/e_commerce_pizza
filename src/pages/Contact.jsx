import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact">
        <section>
          <Container>
            <Row>
              <Col lg="3" md="3">
                111111
              </Col>
            </Row>
          </Container>
        </section>
      </CommonSection>
    </Helmet>
  );
};

export default Contact;
