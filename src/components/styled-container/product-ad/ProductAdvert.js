import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard'
import propertyImg from '../../../assets/images/renthouse.jpg'

const ProductAdvert = () => {
    return (
        <StyledContainer>
            <h5 className="container-tag">Hottest Picks</h5>
            <section>
                <ProductCard price='12,000' propertyDesc='4 bedroom apartment' address='Federal Secretariat Complex, Phase 1, Annex II, Ground Floor' agency='Aboki Realtors' propertyImg={propertyImg}/>
                <ProductCard price='12,000' propertyDesc='4 bedroom apartment' address='Federal Secretariat Complex, Phase 1, Annex II, Ground Floor' agency='Aboki Realtors' propertyImg={propertyImg}/>
                <ProductCard price='12,000' propertyDesc='4 bedroom apartment' address='Federal Secretariat Complex, Phase 1, Annex II, Ground Floor' agency='Aboki Realtors' propertyImg={propertyImg}/>
                <ProductCard price='12,000' propertyDesc='4 bedroom apartment' address='Federal Secretariat Complex, Phase 1, Annex II, Ground Floor' agency='Aboki Realtors' propertyImg={propertyImg}/>
                <ProductCard price='12,000' propertyDesc='4 bedroom apartment' address='Federal Secretariat Complex, Phase 1, Annex II, Ground Floor' agency='Aboki Realtors' propertyImg={propertyImg}/>
            </section>
            <a href='http://'>SEE MORE</a>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    background-color:#fff;
    .container-tag{
        font-size: 1.25rem;
        font-weight: 400;
        padding: 3rem 0rem;
    }
    section{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
        grid-gap: 2rem;
        text-align: left;
    }
    a{
        font-size: 0.825rem;
        font-weight: 500;
        color: inherit;
        padding: 3rem 0rem;
        display: inline-block;
    }
    @media(max-width:1024px){
        padding: 1rem;
    }
`

export default ProductAdvert
