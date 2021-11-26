import React from 'react'
import styled from 'styled-components'

const StyledContainer = ({children}) => {
    return (
        <StyledContain>{children}</StyledContain>
    )
}

const StyledContain = styled.div`
    /* .container{ */
        width: 1200px;
        border: 1px solid white;
        margin: 0 auto;
    /* } */
    @media(max-width:768px){
        width: 720px;
    }
    @media(max-width:425px){
        margin: 0 16px;
    }
`
export default StyledContainer
