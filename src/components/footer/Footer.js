import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/svgs/big-logo.svg'
import facebookIcon from '../../assets/svgs/facebook-icon.svg'
import twitterIcon from '../../assets/svgs/twitter-icon.svg'
import instagramIcon from '../../assets/svgs/instagram-icon.svg'
import testimonialImg from '../../assets/svgs/testimonial.svg'

const Footer = () => {
    return (
        <Wrapper>
                <div className='footer-section__left'>
                    <img src={Logo} alt='company-logo' className='company-logo'/>
                    <div className='testimonial-section'>
                        <img src={testimonialImg} alt='testimonial-img' className='testimonial-img'/>
                        <h5 className='testimonial-name'>Abiodun</h5>
                        <p className='testimonial-text'>HouseSearch is the best ever, literally got my dream apartment in minutes and also at a wonderful price</p>
                    </div>
                </div>
                <div className='footer-section__right'>
                    <section className='footer-section__links'>
                        <div className='footer-elem'>
                            <h5>Partnerships</h5>
                            <a  href='www'>Agents</a>
                            <a  href='www'>Lawyers</a>
                            <a  href='www'>Brands</a>
                        </div>
                        <div className='footer-elem'>
                            <h5>About</h5>
                            <a  href='www'>Our Products</a>
                            <a  href='www'>Careers</a>
                        </div>
                        <div className='footer-elem'>
                            <h5>Support</h5>
                            <a  href='www'>Support request</a>
                            <a  href='www'>Contact</a>
                        </div>
                    </section>
                    <secction className='footer-section__icons'>
                        <p>info@house-search.com</p>      
                        <div className='social-elem'>
                            <img src={facebookIcon} alt='facebook-icon' className='facebook-icon icon'/>
                            <img src={instagramIcon} alt='instagram-icon' className='instagram-icon icon'/>
                            <img src={twitterIcon} alt='twitter-icon' className='twitter-icon icon'/>
                        </div>
                    </secction>
                </div>            
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 5rem;
    background-color:#002e4c;
    padding: 3rem;
    color: white;
    .footer-section__left{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        .testimonial-section{
            margin: 0 auto;
            text-align: center;
            padding: 0 2rem;
            .testimonial-img{
                border-radius:50%;
            }
            .testimonial-name{
                font-size: 0.875rem;
                font-weight: 400;
                text-transform: uppercase;
            }
            .testimonial-text{
                font-size: 0.75rem;
                font-weight: 200;
                line-height:1rem;
            }
            .testimonial-img, .testimonial-name, .testimonial-text{
                padding-bottom: 0.5rem;
            }
        }
    }
    
    .footer-section__right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .footer-section__links{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        .footer-section__links h5{
            font-size: 0.875rem;
            padding-bottom: 1rem;
            font-weight: 500;
        }
        .footer-section__links a{
            font-size: 0.625rem;
            display: block;
            text-decoration: none;
            color: inherit;
            font-weight: 300;
            text-transform: uppercase;
            padding-bottom: 0.5rem;
        }
    }
    
    .footer-section__icons, .social-elem{
        display: flex;
        justify-content: space-between;
    }
    
    .footer-section__icons{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        p{
            font-size: 0.875rem;
            font-weight: 500;
        }
    }
    .social-elem{
        width: 6rem;
        .icon{
            height:1rem;
        }
    }
    /* MEDIA QUERIES */
    @media(max-width:1140px) {
        .footer-section__left{
            .testimonial-section{
                padding: 0 0.5rem;
                min-width: 10rem;
                .testimonial-img{
                    height:3rem;
                }
                .testimonial-name{
                font-size: 0.75rem;
                font-weight: 400;
                text-transform: uppercase;
                }
                .testimonial-text{
                    font-size: 0.625rem;
                    font-weight: 200;
                    line-height:1rem;
                }
            }
        }
    }
    @media(max-width:900px) {
        .footer-section__left{
            .testimonial-section{
                padding: 0 0.5rem;
            }
        }
    }
    @media (min-width: 561px) and (max-width:768px) {
        padding: 3rem 1rem;
        gap: 2rem;
        .footer-section__right{
        
        .footer-section__links{
            display: flex;
            justify-content:space-between;
        }
        
        .footer-section__icons{
            display: flex;
            justify-content:space-between;
        }
    }
    }
    @media(max-width:561px){
        grid-template-columns: 1fr;
        gap: 2rem;
        margin: 0 auto;
        .footer-section__right{
        
        .footer-section__links{
            display: flex;
            justify-content:space-between;
        }
        .footer-section__links h5{
            padding-bottom: 1.3rem;
        }
        .footer-section__icons{
            display: flex;
            flex-direction: column-reverse;
        }
        .footer-section__icons, .social-elem{
            grid-template-columns: 1fr ;
            margin: 0 auto;
        }
        .footer-section__icons p, .social-elem{
            padding-bottom: 1rem;
        }
        .footer-section__links a{
            display: none;
        }
    }
    }
    @media(max-width:280px){
        padding: 2rem;
    }
`

export default Footer
