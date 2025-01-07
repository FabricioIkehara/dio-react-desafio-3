import styled from 'styled-components';
import { Button as CustomButton } from '../../components/Button';

export const ContainerRegister = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 90px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FormContainer = styled.div`
  width: 45%;
  padding: 20px;
`;

export const TextContainer = styled.div`
  width: 45%;
  padding: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
  }
`;

export const Title = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  width: 420px;
  margin-bottom: 20px;
  color: #FFFFFF;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    margin-bottom: 10px;
  
    width: 750px;

    &:focus {
      outline: none;
      
    }
  }
`;

export const Button = styled(CustomButton)`
  margin-top: 10px;
  width: 275px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 10px;
`;

export const LoginLink = styled.a`
  color: green;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
