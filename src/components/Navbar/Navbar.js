import {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


export default function Navbar() {
  const [navItemShow, setNavItemShow] = useState(true)
  return(
    <Nav>
      <NavLogo href='/'>
        AxN
      </NavLogo>
      <NavItem
        hide={false}
      >
        <li>
          <NavLink href='/top_movies'>MOVIES</NavLink>
        </li>
        <li>
          <NavLink href='/top_tvshows'>TV SHOWS</NavLink>
        </li>
      </NavItem>
      <Hamburger onClick={() => setNavItemShow(!navItemShow)} />
    </Nav>
  )
}


const Nav = styled.nav`
  position: relative;
  color: #000;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-right: 20%;
  padding-top: 15px;
`;

const NavLogo = styled(Link)`
  color: #151515;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bolder ;
  padding-left: ;
`;

const NavItem = styled.ul`
  width: 20%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  ${props => props.hide &&`
    display: none;
  `}
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const Hamburger = styled.button`
  color: #000;
  background: transparent;
  border: none;
  &:after {
    content: '='
  }
  @media (min-width: 480px) {
    display: none;
  }
`;