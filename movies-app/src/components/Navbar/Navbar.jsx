import React from "react";
import { Link } from "react-router-dom";
import { LinkText, NavbarContainer } from "./NavbarStyles";
import { motion } from "framer-motion";
import { hover } from "./NavbarAnim";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <LinkText whileHover={hover} as={motion.h4}>
          Home
        </LinkText>
      </Link>
      <Link to="/favorites">
        <LinkText whileHover={hover} as={motion.h4}>
          Favorites
        </LinkText>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar;
