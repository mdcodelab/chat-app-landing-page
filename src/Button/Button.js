import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 30px !important;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: #ffffff;
  color: #000000;

  &.primary {
    background-color: #ffffff;
    color: #000000;
    
    &:hover {
      background-color: #8674FE;
      color: #fff;
    }
  }

  &.medium {
    font-size: 16px;
    padding: 12px 24px;
  }
`;

export const Button = ({ className, color, size, children }) => {
  return (
    <StyledButton className={`${className} ${color} ${size}`}>
      {children || 'Get Started'}
    </StyledButton>
  );
}; 