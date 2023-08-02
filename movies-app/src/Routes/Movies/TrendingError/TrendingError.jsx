import React from "react";
import PropTypes from "prop-types";
import {
  MovieNotAvaiableContainer,
  ButtonHomepage,
  Heading,
  SubHeading,
} from "./TrendingErrorStyles";

const TrendingError = ({ errorMessage }) => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <MovieNotAvaiableContainer>
      <Heading>Cannot show trending movies.</Heading>
      <SubHeading>{errorMessage}</SubHeading>

      <ButtonHomepage onClick={handleRefresh}>Refresh</ButtonHomepage>
    </MovieNotAvaiableContainer>
  );
};

TrendingError.propTypes = {
  errorMessage: PropTypes.string,
};
export default TrendingError;
