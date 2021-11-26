import React from 'react'
import styled from 'styled-components'
import Button from '../button/Button'

const StyledInput = ({
  text,
  placeholder,
  value,
  classname,
  fontSize,
  fontWeight,
  sectionBorder,
  color,
  backgroundColor,
  sectionWidth,
  sectionHeight,
  sectionBackgroundColor
}) => {
  return (
    <Section sectionBorder={sectionBorder} sectionBackgroundColor={sectionBackgroundColor} sectionWidth={sectionWidth} sectionHeight={sectionHeight} >
      <input
        type={text}
        placeholder={placeholder}
        value={value}
        className={classname}
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        backgroundColor={backgroundColor}
      />
      <div>
        <Button buttonBackgroundColor='#e5e5e5' fontSize='0.5' buttonText="SHOW MORE" fontWeight='800' />
      </div>
    </Section>
  );
};

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${({sectionBackgroundColor}) => sectionBackgroundColor || '#e5e5e5'};
    width: ${({sectionWidth}) => sectionWidth || ''}rem;
    height: ${({sectionHeight}) => sectionHeight || ''}rem;
    border: ${({sectionBorder}) => sectionBorder || '1px solid #E5E5E5'};
    input{
        flex: 1;
        font-size:${({fontSize}) => fontSize || 0.5}rem;
        font-weight: ${({fontWeight}) => fontWeight || 800};
        font-family: inherit;
        padding-right: 1rem;
        outline: none;
        border-radius: 0rem;
        color: ${({color}) => color || '#002e4c'};
        border: 1px solid #e5e5e5;
        background-color:${({backgroundColor}) => backgroundColor || '#fff'} ;
    }
    input:active, input:focus{
      outline: 1px solid #e5e5e5 ;
      border: 0.1px solid #002e4c;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    input::placeholder{
      color: #002e4c;
      opacity: 0.7;
    }
    @media(max-width:768px){
      display:grid;
      grid-template-columns:2fr 1fr;
    }
`

export default StyledInput
