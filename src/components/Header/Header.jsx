import React from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const nav__link = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizza delivery</h5>
          </div>
          {/* menu */}
          <div className="navigation">
            <div className="menu">
              {nav__link.map((item, index) => (
                <NavLink to={item.path} key={index}>
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="nav__right">
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
