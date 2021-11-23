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
  sectionBorder
}) => {
  return (
    <Section sectionBorder={sectionBorder}>
      <input
        type={text}
        placeholder={placeholder}
        value={value}
        className={classname}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
      <div>
        <Button buttonText="SHOW MORE" fontWeight='750' />
      </div>
    </Section>
  );
};

const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: ${({sectionBorder}) => sectionBorder || '1px solid #E5E5E5'};
    input{
        flex: 1;
        font-size:${({fontSize}) => fontSize || 0.5}rem;
    }
`

export default StyledInput
