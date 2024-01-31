import React from "react";
import { Link, useRouteError } from "react-router-dom";
import {
  ButtonHomepage,
  Heading,
  MovieNotAvaiableContainer,
} from "./Routes/MoviePage/MoviePageStyles";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <MovieNotAvaiableContainer>
      <Heading>{error}</Heading>

      <Link to={"/"}>
        <ButtonHomepage>Homepage</ButtonHomepage>
      </Link>
    </MovieNotAvaiableContainer>
  );
}
