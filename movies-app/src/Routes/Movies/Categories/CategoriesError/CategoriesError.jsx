import React from "react";
import PropTypes from "prop-types";
import {
  CategoriesErrorContainer,
  CategoriesErrorText,
  CategoriesRefreshButton,
} from "./CategoriesErrorStyles";

const CategoriesError = ({ categoriesError }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <CategoriesErrorContainer>
      <CategoriesErrorText>Categories cannot be fetched ..</CategoriesErrorText>
      <CategoriesErrorText>. {categoriesError}</CategoriesErrorText>
      <CategoriesRefreshButton onClick={handleRefresh}>
        Refresh
      </CategoriesRefreshButton>
    </CategoriesErrorContainer>
  );
};

CategoriesError.propTypes = {
  categoriesError: PropTypes.string,
};
export default CategoriesError;
