import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  background: salmon;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 10rem;
  padding: 0 5rem;
  a {
      text-decoration: none;
      color: #fff;
      letter-spacing: 2px;
    }
  ul {
    list-style: none;
    display: flex;
    column-gap: 5rem;
    
  }
`

export default function Navbar() {
  return (
    <Nav>
      <span><h1><Link to="/">LOGO</Link></h1></span>
      <ul>
        <li><Link to="/fish">물고기</Link></li>
        <li><Link to="/insect">곤충</Link></li>
        <li><Link to="/art">그림</Link></li>
      </ul>
    </Nav>
  )
}
