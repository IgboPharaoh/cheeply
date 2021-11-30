import React from 'react'
import Navbar from '../navbar/Navbar'
import styled from 'styled-components'
import backgroundImage from '../../assets/images/cover-image.jpg'

const LandingPage = () => {
    return (
        <StlyedPage>
            <Navbar className="nav-bar" />
            <div className="page-wrapper">
                <div className="page-content">
                    <div className="page-content__text">
                        <h5 className="page-content__heading">New houses: Lagos, Abuja, Port-Harcout</h5>
                        <p className="page-content__desc">Explore the best deals on a variety of houses from your favourite locations in the country. Get discounts on multiple purchases and commissions on referrals.</p>
                        <a href='www' className='page-content__link'>SHOW MORE</a>
                    </div>
                </div>
                <div className="page-img" >
                    <div className="overlay">
                    </div>
                </div>
            </div>
           
        </StlyedPage>
    )
}

const StlyedPage = styled.div`
    position: relative;
    color: #fff;
    .nav-bar{
        position: absolute;
        z-index: 10;
    }
    .page-wrapper{
    display: grid;
    grid-template-columns:1fr 3fr;
    height:100vh;
    }
    .page-content, .page-img{
        background-color:#002e4c;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 2rem;
        .page-content__text{
            padding:2rem;
            .page-content__heading{
                font-size:1.5rem;
            }
            .page-content__desc{
                font-size:.875rem;
                line-height: 1.2rem;
            }
            .page-content__heading, .page-content__desc{
                padding-bottom: 1.5rem;
                font-weight:100;
            }
            .page-content__link{
            color: inherit;
            font-size:.75rem;
            font-weight:400;
            display: inline-block;
            :hover{
                color: #2eaba9;
            }
          }
        }    
    }
    .page-img{
        background-image:url(${backgroundImage});
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
        .overlay{
            position: absolute;
            background-color: black;
            width: 100%;
            height: 100%;
            position: absolute;
            bottom:0rem;
            left: 0rem;
            opacity: 0.1;
        }
    }

  @media(min-width: 500px) and (max-width:1024px){
    .page-wrapper{
          grid-template-columns: 1fr 2fr;
        .page-content {
            padding-bottom:1rem;
        .page-content__text{
            padding:1rem;
        .page-content__heading{
            font-size:1rem;
            line-height: 1.5rem;
        }
        .page-content__desc{
            font-size:.725rem;
        }
        .page-content__heading, .page-content__desc{
            padding-bottom: 0.75rem;
        }
        .page-content__link{
            font-size:.5rem;
            }
        }
      }
    }
  } 

  @media(max-width:499px){
      .page-wrapper{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
        .page-content{
            .page-content__text{
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .page-content__heading{
                line-height: 2.0rem;
            }
        }

        .page-img{
            grid-row:1/-1;
        }
      }
    }
  
`

export default LandingPage
