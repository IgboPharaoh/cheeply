import React from 'react'
import styled from 'styled-components'
import StyledContainer from '../styled-container/StyledContainer';
import Logo from '../../assets/svgs/big-logo.svg'

const Navbar = ()=>{
    return (
        <StyledNavbar>
            <StyledContainer>
                <ul>
                    <li>
                        <a href='#'><p>buy</p></a>
                    </li>
                    <li>
                        <a href='#'><p>sell</p></a>
                    </li>
                    <li>
                        <img src={Logo} alt='company-logo' className='company-logo'/>
                    </li>
                    <li>
                        <a href='#'><p>rent</p></a>
                    </li>
                    <li>
                        <a href='#'><p>lease</p></a>
                    </li>
                </ul>
            </StyledContainer>
            
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
  width: 100%;
  background-color: #002e4c;
  ul {
    list-style: none;
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  ul li a {
    list-style: none;
    text-decoration: none;
    color: #e5e5e5;
    font-weight: 500;
    text-transform: capitalize;
  }
  a:hover {
    color: #2eaba9;
    border-bottom: 2
    px solid #2eaba9;
  }
  li img {
    height: 3rem;
    width: 3rem;
  }
`;

export default Navbar;
