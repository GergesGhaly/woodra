import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <MobileButton onClick={() => setShowMenu(true)}>☰</MobileButton>

      <Logo>Woodra</Logo>

      <Nav className={showMenu ? "show" : ""}>
        <CloseButton onClick={() => setShowMenu(false)}>✕</CloseButton>

        <li>
          <a href="/">home</a>
        </li>

        <li>
          <a href="/">about</a>
        </li>

        <li>
          <a href="/">shop</a>
        </li>

        <li>
          <a href="/">contact</a>
        </li>
      </Nav>
    </Container>
  );
}

/* ================= STYLES ================= */

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  z-index: 100;

  display: flex;
  align-items: center;
  

  padding: 3rem 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Logo = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-right: 4rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  list-style: none;

  li a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    position: relative;
  }

  li a::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -6px;

    width: 0%;
    height: 2px;

    background: white;

    transition: 0.3s;
  }

  li a:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    position: fixed;

    top: 0;
    left: -100%;

    width: 100%;
    background: white;

    padding: 1rem;
    gap: 1rem;

    transition: 0.3s;

    &.show {
      left: 0;
    }

    li a {
      color: black;
    }

    li a::after {
      background: black;
    }
  }
`;

const MobileButton = styled.button`
  display: none;

  border: none;
  background: transparent;

  color: white;
  font-size: 1.5rem;

  cursor: pointer;

  @media (max-width: 768px) {
    display: block;

    position: absolute;
    left: 2rem;
  }
`;

const CloseButton = styled.button`
  display: none;

  border: none;
  background: transparent;

  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 2rem;
  }
`;
