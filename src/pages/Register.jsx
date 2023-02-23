import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const signUpNameRef = useRef();
  const signUpPasswordRef = useRef();
  const signEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="SignUp">
      <CommonSection title="SignUp" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form action="" className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signUpNameRef}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signEmailRef}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signUpPasswordRef}
                  />
                </div>
                <div className="addToCart__btn">Sign Up</div>
              </form>
              <Link to="/register">Alredy have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
