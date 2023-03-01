import React from "react";
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact">
        <section>
          <Container>
            <Row>
              <Col lg="3" md="3"></Col>
            </Row>
          </Container>
        </section>
      </CommonSection>
    </Helmet>
  );
};

export default Contact;
