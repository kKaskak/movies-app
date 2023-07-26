import React from 'react'
import { Link } from 'react-router-dom'
import { MovieNotAvaiableContainer, ButtonHomepage, Heading } from './MoviePageStyles'

const MovieNotAvaible = () => {
  return (
    <MovieNotAvaiableContainer>
        <Heading>Movie Not Avaible</Heading>

        <Link to={'/'}><ButtonHomepage>Homepage</ButtonHomepage></Link>
    </MovieNotAvaiableContainer>
  )
}

export default MovieNotAvaible