import React from 'react';
import { Header } from '../../components/Header';
import { ContainerRegister, FormContainer, TextContainer, StyledForm, Title, SubTitle, Text, LoginLink } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'; // Importando o componente Button
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useForm } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <ContainerRegister>
        <TextContainer>
          <p>A plataforma para você aprender com experts, dominar as principais</p>
          <p>tecnologias e entrar mais rápido nas empresas mais desejadas.</p>
        </TextContainer>
        <FormContainer>
          <Title>Comece agora grátis</Title>
          <SubTitle>Crie sua conta e make the change...</SubTitle>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Input name="nome" control={control} placeholder="Nome" leftIcon={<MdPerson />} />
            <Input name="email" control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
            <Input name="senha" control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Input name="confirmarSenha" control={control} placeholder="Confirme sua senha" type="password" leftIcon={<MdLock />} />
            <Button title="Criar minha conta" variant="secondary" width="175px" /> 
          </StyledForm>
          <Text>
            Ao clicar em "criar conta grátis", declaro que Aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </Text>
          <Text>
            Já tenho conta <LoginLink href="/login">fazer login</LoginLink>
          </Text>
        </FormContainer>
      </ContainerRegister>
    </>
  );
}

export { Register };
