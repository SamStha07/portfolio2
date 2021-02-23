import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.7,
    transition: {
      delay: 1,
    },
  },
};
const NavitemVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      type: 'spring',
      stiffness: '50',
    },
  },
};

const NavBar = styled(motion.div)`
  background: black;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  opacity: 0.7;
  position: fixed;
  width: 100%;
  z-index: 5;
  min-width: 1100px;
`;
const NavItems = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    display: none;
  }
`;
const NavLinks = styled.li`
  color: white;
  text-decoration: none;
  list-style: none;
  padding: 0 2rem;
`;

const Header = () => {
  return (
    <NavBar variants={NavbarVariants} initial='hidden' animate='visible'>
      <NavItems variants={NavitemVariants}>
        <NavLinks>Home</NavLinks>
        <NavLinks>Projects</NavLinks>
        <NavLinks>Skills</NavLinks>
        <NavLinks>About Me</NavLinks>
        <NavLinks>Contact</NavLinks>
      </NavItems>
    </NavBar>
  );
};

export default Header;
