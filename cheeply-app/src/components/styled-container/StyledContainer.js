import React from 'react'
import styled from 'styled-components'

const StyledContainer = () => {
    return (
        <StyledContain>
            <div className='container'>

            </div>
        </StyledContain>
    )
}

const StyledContain = styled.div`
    .container{
        width: 1200px;
    }
    @media(max-width:768px){
        width: 720px;
    }
    @media(max-width:425px){
        margin: 0 16px;
    }
`
export default StyledContainer
