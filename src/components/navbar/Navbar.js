import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/svgs/big-logo.svg'
import menu from '../../assets/svgs/menu.svg'
import saved from '../../assets/svgs/saved.svg'
import darkLogo from '../../assets/svgs/darkbig-logo.svg'
import darkMenu from '../../assets/svgs/darkmenu.svg'
import darkSaved from '../../assets/svgs/darksaved.svg'

const Navbar = ({className, padding, color, backgroundColor, href})=>{
    return (
      <>
      {
        href ? 
        (
        <BckgNavbar className={className} color={color}  backgroundColor={backgroundColor} >
                <ul padding={padding} >
                    <div className="menu-container">
                      <li>
                        <a href="www">         
                          <img src={darkMenu} alt='menu-icon' className='menu-icon'/>
                        </a>
                      </li>
                      <li>
                        <a href='www' className='explore-text' >explore</a>
                      </li>
                    </div>
                    
                    <li>
                      <a href='http://'>
                        <img src={darkLogo} alt='company-logo' className='company-logo'/>
                      </a>
                        
                    </li>
                    <li>
                      <a href='http://'>
                        <img src={darkSaved} alt='saved-icon' className='saved-icon'/>
                      </a>
                    </li>
                </ul>           
        </BckgNavbar>
        )

          :

          (
        <StyledNavbar className={className} color={color}  backgroundColor={backgroundColor} >
                <ul padding={padding} >
                    <div className="menu-container">
                      <li>
                        <a href="www">         
                          <img src={menu} alt='menu-icon' className='menu-icon'/>
                        </a>
                      </li>
                      <li>
                        <a href='www' className='explore-text' >explore</a>
                      </li>
                    </div>
                    
                    <li>
                      <a href='http://'>
                        <img src={logo} alt='company-logo' className='company-logo'/>
                      </a>
                        
                    </li>
                    <li>
                      <a href='http://'>
                        <img src={saved} alt='saved-icon' className='saved-icon'/>
                      </a>
                    </li>
                </ul>           
        </StyledNavbar>
          )
      }
      </>    
    )
}



const BckgNavbar = styled.nav`
  width: 100%;
  margin: 0 auto;
  color:${({color}) => color || '#002e4c'} ;
  background-color:${({backgroundColor}) => backgroundColor || 'white'} ;
  border-bottom: 2px solid #efefef;
  /* padding: 0.75rem 0; */
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .menu-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menu-icon{
      padding-right: 1rem;
    }
  ul li a {
    text-decoration: none;
    color: #fff;
    color:${({color}) => color || '#002e4c'} ;
    font-weight: 300;
    font-size: 0.75rem;
    text-transform: capitalize;
    display: block;
  }
  a:hover{
    color: #2EABA9;
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
    .menu-icon{    
      padding-right:0rem;
    }
    .explore-text{
      display: none;
    }
  }
  
`;

const StyledNavbar = styled.nav`
  width: 100%;
  margin: 0 auto;
  color:${({color}) => color || 'white'} ;
  background-color:${({backgroundColor}) => backgroundColor || ''} ;
  /* padding: 0.75rem 0; */
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }
  .menu-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .menu-icon{
      padding-right: 1rem;
    }
  ul li a {
    text-decoration: none;
    color: #fff;
    color:${({color}) => color || 'white'} ;
    font-weight: 300;
    font-size: 0.75rem;
    text-transform: capitalize;
    display: block;
  }
  a:hover{
    color: #2EABA9;
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
    .menu-icon{    
      padding-right:0rem;
    }
    .explore-text{
      display: none;
    }
  }
  
`;

export default Navbar;
