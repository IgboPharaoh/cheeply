import React from 'react'
import styled from 'styled-components'
import StyledInput from '../input/StyledInput'

const Subscribe = () => {
    return (
        <Wrapper>         
                <h5>Subscribe to the newsletter and recieve only important messages about news, promotions and big discounts</h5>
                <div className="input-container">
                    <StyledInput sectionHeight='2rem' placeholder="YOUR EMAIL" />
                </div>        
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 5rem ;
    align-items: center;
    border: 2px solid #efefef;
    h5{
        font-weight: 300;
        font-size:2rem;
        line-height:2.5rem;
    }
    .input-container{
        padding-top: 2rem ;
        max-width: 40rem;
        margin: 0 auto;
    }
    @media(max-width:500px){
        padding: 2rem 1rem;
        h5{
            font-size: 1.3rem;
            line-height: 2rem;
        }
        .input-container{
            padding-bottom: 2rem;
        }
    }
    @media(max-width:280px){
        padding: 2rem 0.5rem;
        h5{
            font-size: 1.3rem;
            line-height: 2rem;
        }
        .input-container{
            padding-bottom: 2rem;
        }
    }
`

export default Subscribe
