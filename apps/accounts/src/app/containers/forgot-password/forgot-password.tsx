import { Route, Link, useHistory } from 'react-router-dom';
import Input from '../../components/base/input/input';
import DefaultButton from '../../components/base/default-button/default-button';
import EmailConfirmationFieldset from './components/email-confirmation-fieldset/email-confirmation-fieldset';
import {
  Container,
  Header,
  ActionText,
  Title,
  Form,
  InputGroup,
  ButtonWrapper,
  SigninText,
  EndContainer,
  EndTitle,
} from './forgot-password.style';
import { useState } from 'react';
import {
  requestCodeValidation,
  resendEmailConfirmation,
  submit,
  submitResetPassword,
} from './forgot-password.controller';

/**
 *
 * @param param0
 * @returns
 */
const ForgotPassword = ({ appName }: { appName: string }) => {
  const history = useHistory();
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const [resentConfirmation, setResentConfirmation] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Container>
      <Route exact path="/forgot-password/">
        <Header>
          <ActionText>Esqueci minha senha</ActionText>
          <Title>Digite seu e-mail cadastrado na IDa</Title>
        </Header>
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
          <ButtonWrapper>
            <SigninText>
              Lembrei!{' '}
              <Link to={`/signin${history.location.search}`}>
                Voltar ao login
              </Link>
            </SigninText>
            <DefaultButton
              disabled={!email}
              onClick={() =>
                submit({
                  email,
                  setErrors,
                  setLoading,
                  search: history.location.search,
                  history,
                })
              }
              loading={loading}
            >
              Próximo
            </DefaultButton>
          </ButtonWrapper>
        </Form>
      </Route>
      <Route path="/forgot-password/confirm">
        <EmailConfirmationFieldset
          email={email}
          code={code}
          error={errors.code}
          setCode={setCode}
          resentConfirmation={resentConfirmation}
          resend={() => {
            setResentConfirmation(true);
            resendEmailConfirmation({
              email,
              setLoading,
              history,
              search: history.location.search,
            });
          }}
          submit={() =>
            requestCodeValidation({
              email,
              code,
              setLoading,
              search: history.location.search,
              history,
              setErrors,
            })
          }
        />
      </Route>
      <Route path="/forgot-password/new-password">
        <Header>
          <Title>Crie uma nova senha</Title>
        </Header>
        <Form>
          <InputGroup>
            <Input
              id="password"
              label="Senha"
              type="password"
              value={newPassword}
              onChange={setNewPassword}
              error={errors.newPassword}
            />
          </InputGroup>
          <ButtonWrapper>
            <SigninText>
              Lembrei!{' '}
              <Link to={`/signin${history.location.search}`}>
                Voltar ao login
              </Link>
            </SigninText>
            <DefaultButton
              disabled={!newPassword}
              onClick={() =>
                submitResetPassword({
                  email,
                  password: newPassword,
                  code,
                  setLoading,
                  search: history.location.search,
                  history,
                  setErrors,
                })
              }
              loading={loading}
            >
              Próximo
            </DefaultButton>
          </ButtonWrapper>
        </Form>
      </Route>
      <Route path="/forgot-password/end">
        <EndContainer>
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 0C16.128 0 0 16.128 0 36C0 55.872 16.128 72 36 72C55.872 72 72 55.872 72 36C72 16.128 55.872 0 36 0ZM28.8 54L10.8 36L15.876 30.924L28.8 43.812L56.124 16.488L61.2 21.6L28.8 54Z"
              fill="#48FEA7"
            />
          </svg>
          <EndTitle>Senha nova criada com sucesso!</EndTitle>
          <ButtonWrapper>
            <DefaultButton
              onClick={() => history.push(`/signin${history.location.search}`)}
            >
              Entrar
            </DefaultButton>
          </ButtonWrapper>
        </EndContainer>
      </Route>
    </Container>
  );
};

export default ForgotPassword;
