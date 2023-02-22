import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5">
                <div className="form__group">
                  <input type="text" placeholder="Email" required />
                </div>

                <div className="form__group">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="addToCart__btn">Login</div>
              </form>
              <Link to="/register">
                Alredy have an account? Create an account!
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
