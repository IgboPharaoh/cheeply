import React from 'react'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'
import backgroundImage from '../../assets/images/cover-image.jpg'

const LandingPage = () => {
    return (
        <StlyedPage>
            {/* <Navbar/> */}
            <div className="lhs">
                <div className="text-container">
                    <h5 className="heading">New houses: Lagos, Abuja, Port-Harcout</h5>
                    <p className="">The aboki bibendum nunc, at fringilla tempor, velit sed. Elementum eget in consequat dictum. Nulla quam enim ut enim eget felis a sed tellus. Nunc ultrices urna, aliquet vulputate velit sed. Elementum eget in consequat dictum. Nulla quam enim ut enim eget felis a sed tellus. Nunc ultrices urna, aliquet vulputate </p>
                    <a href='www' className='show-more'>SHOW MORE</a>
                </div>

            </div>
            <div className="rhs">
                <img src={backgroundImage} alt='bckgimage-1' />
            </div>
        </StlyedPage>
    )
}

const StlyedPage = styled.div`
    
    color: white;
    display: grid;
    grid-template-columns:1fr 3fr;
    height:100vh;
    .lhs{
        background-color:#002e4c;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .text-container{
            padding:2rem;
            h5{
                font-size:1.2rem;
                font-weight:100;
                padding-bottom: 1rem;
            }
            p{
                font-size:.625rem;
                font-weight:400;
                padding-bottom: 1rem;
                line-height: 1rem;
                opacity:0.8;
            }
        }

        a{
            text-decoration: none;
            color: inherit;
            font-size:.625rem;
            font-weight:400;
            border-bottom: 1px solid #fff;
            line-height: 1rem;
        }
    }
    
    .rhs{
    img{
        height: 100vh;
        width: 100%;
    }
  }

`

export default LandingPage
