import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svgs/big-logo.svg'
import Menu from '../../assets/svgs/menu.svg'
import Saved from '../../assets/svgs/saved.svg'

const Navbar = ()=>{
    return (
        <StyledNavbar>
                <ul>
                    <div className="explore">
                      <li>
                        <a href="www">
                          <img src={Menu} alt='menu-icon' className='menu-icon'/>
                        </a>
                      </li>
                      <li>
                        <a href='www'>explore</a>
                      </li>
                    </div>
                    
                    <li>
                      <a href='http://'>
                        <img src={Logo} alt='company-logo' className='company-logo'/>
                      </a>
                        
                    </li>
                    <li>
                      <a href='http://'>
                        <img src={Saved} alt='saved-icon' className='saved-icon'/>
                      </a>
                    </li>
                </ul>           
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
  width: 100%;
  margin: 0 auto;
  color: white;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
  }
  .explore{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 5rem;
    }
  ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: 300;
    font-size: 0.75rem;
    text-transform: capitalize;
  }
  a:hover{
    color: #2eaba9;
  }
`;

export default Navbar;
