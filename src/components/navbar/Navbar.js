import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svgs/big-logo.svg'
import Menu from '../../assets/svgs/menu.svg'
import Saved from '../../assets/svgs/saved.svg'

const Navbar = ({className, padding})=>{
    return (
        <StyledNavbar className={className}  >
                <ul padding={padding} >
                    <div className="menu-container">
                      <li>
                        <a href="www">
                          <img src={Menu} alt='menu-icon' className='menu-icon'/>
                        </a>
                      </li>
                      <li>
                        <a href='www' className='explore-text' >explore</a>
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
    padding: 0 2rem;
  }
  .menu-container{
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
    display: inline-block;
    margin-top: 1rem;
  }
  a:hover{
    color: #2eaba9;
  }
  @media(min-width: 500px) and (max-width:1024px){
    ul{
      padding:0 1rem;
    }
  }
  @media(max-width:499px){
    ul{
      padding:0 1rem;
    }
    .explore-text{
      display: none;
    }
  }
`;

export default Navbar;
