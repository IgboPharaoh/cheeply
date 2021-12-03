import React from 'react'
import styled from 'styled-components'
import Button from '../button/Button'

const StyledInput = ({
  placeholder,
  value,
  classname,
  fontSize,
  fontWeight,
  sectionBorder,
  color,
  inputBackgroundColor,
  sectionWidth,
  sectionHeight,
  sectionBackgroundColor
}) => {
  return (
    <Section sectionBorder={sectionBorder} sectionBackgroundColor={sectionBackgroundColor} sectionWidth={sectionWidth} sectionHeight={sectionHeight} >
      <input
        type='email'
        placeholder={placeholder}
        value={value}
        className={classname}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        inputBackgroundColor={inputBackgroundColor}
        required
      />
      <div>
        <Button buttonWidth='100%' buttonHeight='100%' buttonBackgroundColor='#fff' fontSize='0.75' buttonText="SUBSCRIBE" fontWeight='600' border='none'/>
      </div>
    </Section>
  );
};

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    background-color: ${({sectionBackgroundColor}) => sectionBackgroundColor || ''};
    width: ${({sectionWidth}) => sectionWidth || ''};
    height: ${({sectionHeight}) => sectionHeight || ''};
    border: ${({sectionBorder}) => sectionBorder || '1px solid #E5E5E5'};
    input{
        flex: 1;
        font-size:${({fontSize}) => fontSize || '0.75'}rem;
        font-weight: ${({fontWeight}) => fontWeight || 600};
        font-family: inherit;
        padding-left: 0.5rem;
        outline: none;
        border-radius: 0rem;
        color: ${({color}) => color || '#002e4c'};
        border: 1px solid #e5e5e5;
        z-index: 10;
        background-color:${({inputBackgroundColor}) => inputBackgroundColor || '#efefef'} ;
    }
    input:active, input:focus{
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    }
    input::placeholder{
      color: #002e4c;
      opacity: 0.7;
    }
    @media(max-width:768px){
      display:grid;
      grid-template-columns:2fr 1fr;
    }
    @media(max-width:500px){
      
    }
`

export default StyledInput
