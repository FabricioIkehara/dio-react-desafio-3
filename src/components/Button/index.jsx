import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({ title, variant = "primary", onClick, width }) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick} width={width}>
      {title}
    </ButtonContainer>
  );
}

export { Button };
