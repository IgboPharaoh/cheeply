import React from 'react'
import styled from 'styled-components'

const Button = ({
  buttonText,
  textColor,
  fontSize,
  fontWeight,
  buttonPaddingTnB,
  buttonPaddingRnL,
  buttonBackgroundColor,
  borderRadius,
  href,
  className,
  border,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopRightRadius,
  borderTopLeftRadius,
  buttonWidth,
  buttonHeight
}) => {
  return (
    <>
      {href ? (
        <AnchorButton
          color={textColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          buttonPaddingTnB={buttonPaddingTnB}
          buttonPaddingRnL={buttonPaddingRnL}
          buttonBackgroundColor={buttonBackgroundColor}
          borderRadius={borderRadius}
          className={className || ""}
          href={href}
          border={border}
        >
          {buttonText}
        </AnchorButton>
      ) : (
        <StyledButton
          color={textColor}
          fontSize={fontSize}
          fontWeight={fontWeight}
          buttonPaddingTnB={buttonPaddingTnB}
          buttonPaddingRnL={buttonPaddingRnL}
          buttonBackgroundColor={buttonBackgroundColor}
          borderRadius={borderRadius}
          className={className || ""}
          border={border}
          borderBottomLeftRadius={borderBottomLeftRadius}
          borderBottomRightRadius={borderBottomRightRadius}
          borderTopRightRadius={borderTopRightRadius}
          borderTopLeftRadius={borderTopLeftRadius}
          buttonWidth={buttonWidth}
          buttonHeight={buttonHeight}
        >
          {buttonText}
        </StyledButton>
      )}
    </>
  );
};

const AnchorButton = styled.a`
  color: ${({ textColor }) => textColor || "white"};
  font-size: ${({ fontSize }) => fontSize || 0.5}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  padding-top: ${({ buttonPaddingTnB }) => buttonPaddingTnB || 0.5}rem;
  padding-bottom: ${({ buttonPaddingTnB }) => buttonPaddingTnB || 0.5}rem;
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor || "#E5E5E5"};
  border-radius: ${({ borderRadius }) => borderRadius || 0.25}rem;
`;

const StyledButton = styled.button`
  color: ${({ textColor }) => textColor || "#002E4C"};
  font-size: ${({ fontSize }) => fontSize || 0.625}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 100};
  padding-top: ${({ buttonPaddingTnB }) => buttonPaddingTnB || 0.5};
  padding-bottom: ${({ buttonPaddingTnB }) => buttonPaddingTnB || 0.5};
  padding-right: ${({ buttonPaddingRnL }) => buttonPaddingRnL || 0};
  padding-left: ${({ buttonPaddingRnL }) => buttonPaddingRnL || 0};
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor || "#E5E5E5"};
  border-radius: ${({ borderRadius }) => borderRadius || 0.25}rem;
  border-color: transparent;
  border-left: 1px solid #E5E5E5;
  border-bottom-left-radius: ${({borderBottomLeftRadius}) => borderBottomLeftRadius || 0}rem;
  border-bottom-right-radius:${({borderBottomRightRadius}) => borderBottomRightRadius || 0}rem;
  border-top-right-radius: ${({borderTopRightRadius}) => borderTopRightRadius || 0}rem;
  border-top-left-radius: ${({borderTopLeftRadius}) => borderTopLeftRadius || 0}rem ;
  font-family: inherit;
  border: ${({ border }) => border || '1px solid white'};
  width: ${({buttonWidth }) => buttonWidth || 0};
  height: ${({buttonHeight }) => buttonHeight || 0};
  
  :hover{
    color: #2EABA9;
  }
  @media(max-width:500px){
    font-size: 0.5rem;
  }
`;

export default Button
