import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Checkout = () => {
  const cartTotalAmout = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmout + Number(shippingCost);
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter you name" />
                </div>
                <div className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form__group">
                  <input type="number" placeholder="Phone number" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Country" />
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form__group">
                  <input type="number" placeholder="Postal code" />
                </div>
              </form>
              <button className="addToCart__btn">Payments</button>
            </Col>
            <Col lg="4" md="6">
              <div>
                <h6>
                  Subtotal: $<span>{cartTotalAmout}</span>
                </h6>
                <h6>
                  Shipping: $<span>{shippingCost}</span>
                </h6>
                <div>
                  <h5>
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
