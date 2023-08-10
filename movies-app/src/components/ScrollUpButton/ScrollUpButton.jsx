import React, { useState, useEffect } from "react";
import { ButtonScrollUp } from "./ScrollUpButtonStyles";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ButtonScrollUp $isVisible={isVisible} onClick={handleScrollUp}>
      <BsFillArrowUpSquareFill size={30} color="#000000" />
    </ButtonScrollUp>
  );
};

export default ScrollUpButton;
