import React from 'react'
import styled from 'styled-components'

const StyledContainer = ({children}) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

const Wrapper = styled.div`
   
        padding: 3rem 2rem;
        border: 1px solid red;
        margin: 0 auto;

    @media(max-width:768px){
        width: 720px;
    }
    @media(max-width:425px){
        margin: 0 16px;
    }
`
export default StyledContainer
