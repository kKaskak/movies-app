import React from "react";
import { CustomLoader, CustomLoaderContainer } from "./LoadingStyles";

const Loading = () => {
  return (
    <CustomLoaderContainer>
      <CustomLoader></CustomLoader>
    </CustomLoaderContainer>
  );
};

export default Loading;
