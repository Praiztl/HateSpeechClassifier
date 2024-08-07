import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import './Header.css';

const StyledHeader = styled.header`
  background-color: #303030;
  height: 60px;
  padding: 10px 12px 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLogo = styled.div`
  padding: 0 12px;
`;

const MenuToggleBtn = styled.div`
  display: none;
  color: #fff;
  font-size: 24px;
  position: absolute;
  right: 30px;
  top: 15px; 
  cursor: pointer;
  z-index: 20;

  @media screen and (max-width: 768px) {
    display: block; 
    color: #fff;
    font-size: 24px;
    position: absolute;
    right: 30px;
    top: 10px; 
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 20px;

  .nav-menu-list {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-family: "Source Sans Pro";
    font-weight: 600;
    line-height: 20px;
    padding: 10px 29px;
    transition: background-color 0.3s, color 0.3s;
    
    position: relative;

     &:after {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      background-color: #9722fa;
      bottom: 0;
      left: 25%;
      right: 25%;
      transition: width 0.3s ease-in-out;
    }

    &.active:after {
      width: 50%;
    }
  }

  

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #303030;
    padding: 10px 0;
    z-index: 15;
     margin-top: 0;

    .nav-menu-list {
      width: 100%;
      text-align: center;
      margin-bottom: 40px; 
    }

    li {
      margin: 11px; 

      &:hover {
        color: #000;
      }
    }
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const location = useLocation();

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleLinkClick = () => {
    setIsToggleOpen(false);
  };

  return (
    <>
      <StyledHeader>
        <NavLogo>
          <Link to={"/"} className="nav-logo-link">
            Tweet Classification
          </Link>
        </NavLogo>

        <NavMenu isToggleOpen={isToggleOpen}>
          <li>
            <Link
              to={"/home"}
              className={`nav-menu-list ${location.pathname === "/home" ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/statistics"}
              className={`nav-menu-list ${location.pathname === "/statistics" ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              Statistics
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={`nav-menu-list ${location.pathname === "/about" ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/feedback"}
              className={`nav-menu-list ${location.pathname === "/feedback" ? "active" : ""}`}
              onClick={handleLinkClick}
            >
              Review
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="nav-menu-list upload"
              onClick={handleLinkClick}
            >
              Upload tweets
            </Link>
          </li>
        </NavMenu>
        <MenuToggleBtn onClick={handleToggleOpen}>
          <FaBars />
        </MenuToggleBtn>
      </StyledHeader>
    </>
  );
};

export default Header;
