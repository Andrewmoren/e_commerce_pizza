import React, { useRef } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";

import "../../styles/header.css";

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
const Header = () => {
  const menuRef = useRef(null);
  const toogleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Pizza delivery</h5>
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toogleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* nav */}
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toogleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
