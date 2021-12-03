import React from 'react'
import styled from 'styled-components'
import favouriteIcon from '../../assets/svgs/favorite-icon.svg'

const ProductCard = ({price, propertyDesc, address, agency, propertyImg}) => {
    return (
        <StyledCard>
            <div className="property-img-section">
                <img src={propertyImg} alt='property-img' className='property-img'/>
                <img src={favouriteIcon} alt='favourite-icon' className='favourite-icon'/> 
            </div>
            <div className="property-text-section">
                <h5 className='property-price'><span>&#8358;</span>{price}</h5>
                <p className='property-desc'>{propertyDesc}</p>
                <p className='property-address'>{address}</p>
                <p className='property-agency'>{agency}</p>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    display: grid;
    border: 2px solid #efefef;
    position: relative;
    .property-img-section, .property-text-section{
        padding: .5rem;
    }
    p{
        padding: 0.2rem 0;
    }
    .property-img{
        width: 100%;
        height: 100%;
        background-size:cover;
    }
    .favourite-icon{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .property-price{
        font-size: 1.5rem;
        font-weight: 600;
        padding-bottom: .5rem;
    }
    .property-desc, .property-address, .property-agency{
        font-size: 0.875rem;
        font-weight: 400;
        opacity:85%;
    } 
    .property-agency{
        font-weight: 100;
    }
`

export default ProductCard


// transform: rotate3d(1, 0, 0, 6deg) translateX(0);
// transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);

// transition: box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    