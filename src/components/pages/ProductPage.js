import React from 'react'
import styled from 'styled-components'
import rentImage from '../../assets/images/renthouse.jpg'
import sellImage from '../../assets/images/sellhouse.jpeg'
import leaseImage from '../../assets/images/leasehouse.jpeg'
import buyImage from '../../assets/images/buyhouse.jpg'

const ProductPage = () => {
    return (
        <StlyedPage>
            <div className='product-section-tagline'>
                <h5>HouseSearch is a collection of the best houses to either <span>Buy, Rent, Sell or Lease</span> </h5>
                <a href='www'>LEARN MORE</a>
            </div>
            <section className='product-section-1'>
                <div className='rent-tab'>
                    <h5>Rent a House</h5>
                    <a href='http://'>DISCOVER</a>
                </div>
                <div className='sell-tab'>
                    <h5>Selling Houses</h5>
                    <a href='http://www'>DISCOVER</a>
                </div>
            </section >
            <section className='product-section-2'>
                <div className='lease-tab'>
                    <h5>Lease a House</h5>
                    <a href='http://'>DISCOVER</a>
                </div>
                <div className='buy-tab'>
                    <h5>Buy a House</h5>
                    <a href='http://www'>DISCOVER</a>
                </div>
            </section>
        </StlyedPage>
    )
}
const StlyedPage = styled.section`
    display: grid;
    grid-template-rows: 1fr 2fr 2fr;
    height: 100vh;
    background-color:#efefef;
    grid-gap: 2rem;
    padding: 2rem;
    /* IMAGES  and POSITIONING */
    section{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 2rem;
        color: #fff;
    }
    .product-section-2{
        grid-template-columns: 1fr 2fr;
    }
    .product-section-tagline{
        margin: 0 auto;
        text-align: center;
    }
    .product-section-1 .rent-tab{
        background-image: url(${rentImage});
    }
    .product-section-1 .sell-tab{
        background-image: url(${sellImage});
    }
    .product-section-2 .lease-tab{
        background-image: url(${leaseImage});
    }
    .product-section-2 .buy-tab{
        background-image: url(${buyImage});
    }
    .product-section-1 .rent-tab, .product-section-1 .sell-tab, .product-section-2 .lease-tab, .product-section-2 .buy-tab{
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 2rem;
    } & a {
        color: white;
        font-size: 0.625rem;
        font-weight: 500;
        display: inline-block;
        padding-top: 1rem;
        width: fit-content;
    }& .product-section-tagline a{
        color: inherit;
        letter-spacing: 0.05rem;
        font-weight:700;
        padding-top: 2rem;
    }
    
    /* FONT STYLING */

    h5{
        font-size:1.25rem;
        font-weight: 300;
    } & .product-section-tagline h5{
        font-size:2rem;
        line-height:2.5rem;
    }
    a:hover{
        color: #2EABA9;
    }
    /* MEDIA QUERIES */
    @media(max-width:768px){
        grid-gap: 1rem;
        padding: 1rem;
        & section{
            grid-gap: 1rem;
        }
        .product-section-1 .rent-tab, .product-section-1 .sell-tab, .product-section-2 .lease-tab, .product-section-2 .buy-tab{
        padding: 1rem;
        }
        .product-section-tagline h5{
        font-size:1.65rem;
        line-height:2rem;
        }
    }
    @media(max-width:500px){
        section{
            grid-template-columns: 1fr;
        }
        .product-section-2{
        grid-template-columns: 1fr;
        }
        h5{
        font-size:1rem;
        font-weight: 300;
        } & .product-section-tagline h5{
        font-size:1.3rem;
        }
        .product-section-tagline a{
        padding-top: 1rem;
        }
    }

`

export default ProductPage