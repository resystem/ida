import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Input from '../../components/base/input/input';
import DefaultButton from '../../components/base/default-button/default-button';
import {
  Container,
  Header,
  ActionText,
  SignupText,
  Title,
  Form,
  InputGroup,
  ButtonWrapper,
} from './signin.style';
import { useState } from 'react';
import { submit } from './signin.controller';

/**
 *
 * @param param0
 * @returns
 */
const Signin = ({ appName, socket }: any) => {
  const history = useHistory();
  const { c: clientId }: any = queryString.parse(history.location.search);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <ActionText>
          Entre no <strong>{appName}</strong> através da IDa!
        </ActionText>
        <Title>Digite seus dados para entrar na IDa</Title>
        <SignupText>
          Ainda não tem conta?{' '}
          <Link to={`/signup${history.location.search}`}>Cadastre-se</Link>
        </SignupText>
        <Form>
          <InputGroup>
            <Input
              id="email"
              label="E-mail"
              type="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
            />
          </InputGroup>
          <InputGroup>
            <Input
              id="password"
              label="Senha"
              type="password"
              value={password}
              onChange={setPassword}
              error={errors.password}
            />
          </InputGroup>
          <ButtonWrapper>
            <Link to={`/forgot-password${history.location.search}`}>
              Esqueceu sua senha?
            </Link>
            <DefaultButton
              disabled={!password || !email}
              onClick={() =>
                submit({
                  email,
                  password,
                  setErrors,
                  setLoading,
                  clientId,
                  socket,
                })
              }
              loading={loading}
            >
              Entrar
            </DefaultButton>
          </ButtonWrapper>
        </Form>
      </Header>
    </Container>
  );
};

export default Signin;
