import React from 'react'
import styled from 'styled-components'
import quality from '../../assets/svgs/quality.svg'
import cheapest from '../../assets/svgs/cheapest.svg'
import verified from '../../assets/svgs/verified.svg'
import trusted from '../../assets/svgs/trusted.svg'

const AssuranceTab = () => {
    return (
        <StyledContainer>
            <article>
                <img src={quality} alt='quality-assurance-icon'/>
                <h5>Quality Assurance</h5>
                <p>Explore the best deals on a variety of houses from your favourite locations in the country. Get discounts on </p>
            </article>
            <article>
                <img src={cheapest} alt=''/>
                <h5>Cheapest Offerings</h5>
                <p>Explore the best deals on a variety of houses from your favourite locations in the country. Get discounts on </p>
            </article>
            <article>
                <img src={verified} alt=''/>
                <h5>Verified Buildings</h5>
                <p>Explore the best deals on a variety of houses from your favourite locations in the country. Get discounts on  </p>
            </article>
            <article>
                <img src={trusted} alt=''/>
                <h5>Trusted Vendors</h5>
                <p>Explore the best deals on a variety of houses from your favourite locations in the country. Get discounts on </p>
            </article>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #efefef;
    padding: 0 2rem;
    grid-gap: 2rem;

    article{
        margin: 0 auto;
        text-align:center;
        padding: 3rem 0;
    }
    h5{
        font-size:1rem;
        font-weight: 400;
        padding-top: 0.75rem;
    }
    p{
        font-size:0.875rem;
        font-weight: 300;
        line-height:1.3rem;
        padding-top: 1rem;
    }
    /* MEDIA QUERIES */
    @media (max-width: 1200px){
        padding: 0 1rem;
        article{
            padding: 2rem 0rem;
        }
        p{
            font-size:0.75rem;
        }
    }
    @media (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        article{
            padding: 2rem;
        }
    }
    @media (max-width: 500px){
        grid-template-columns: 1fr;
    }
    
`

export default AssuranceTab
