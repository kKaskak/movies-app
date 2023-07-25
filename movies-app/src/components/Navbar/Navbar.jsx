import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0 2rem;
  height: 7vh;
  margin: 0 auto;
  padding: 0 4rem;
`
const Navbar = () => {
  return (
    <NavbarContainer>
       <Link to='/'>Home</Link>
       <Link to='/favorites'>Favorites</Link>
    </NavbarContainer>
  )
}

export default Navbar