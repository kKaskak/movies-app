import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  MovieNotAvaiableContainer,
  ButtonHomepage,
  Heading,
  SubHeading,
} from "./MoviePageStyles";

const MovieNotAvaible = ({ errorMessage }) => {
  return (
    <MovieNotAvaiableContainer>
      <Heading>Movie info is not avaiable at the moment.</Heading>
      <SubHeading>{errorMessage}</SubHeading>

      <Link to={"/"}>
        <ButtonHomepage>Homepage</ButtonHomepage>
      </Link>
    </MovieNotAvaiableContainer>
  );
};

MovieNotAvaible.propTypes = {
  errorMessage: PropTypes.string,
};
export default MovieNotAvaible;
