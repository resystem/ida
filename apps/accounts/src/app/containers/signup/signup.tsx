import { useEffect, useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import BasicInformationFieldset from './components/fieldsets/basic-informations-fieldset/basic-informations-fieldset';
import TermsFieldset from './components/fieldsets/terms-fieldset/terms-fieldset';
import Success from './components/fieldsets/success-fieldset/success';
import EmailConfirmationFieldset from './components/fieldsets/email-confirmation-fieldset/email-confirmation-fieldset';
import EndFieldset from './components/fieldsets/end-fieldset/end-fieldset';
import {
  requestCodeValidation,
  resendEmailConfirmation,
  signupUser,
  toConfirmEmail,
} from './signup.controller';
import {
  Section,
  Header,
  ActionText,
  SignupText,
  Title,
  Main,
} from './signup.style';

const Signup = ({
  appName,
  socket,
  clientId,
}: {
  clientId: string;
  appName: string;
  socket: any;
}) => {
  const history = useHistory();
  // form fields
  const [auth, setAuth] = useState<any>(null);
  const [agreedTerm, setAgreedTerm] = useState(false);
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  // context states
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [resentConfirmation, setResentConfirmation] = useState(false);

  return (
    <Section>
      <Main>
        <Switch>
          <Route exact path="/signup">
            <Header>
              <ActionText>
                Inscreva-se no <strong>{appName}</strong> através da IDa!
              </ActionText>
              <SignupText>
                Já é cadastrado?{' '}
                <Link to={`/signin${history.location.search}`}>Faça login</Link>
              </SignupText>
              <Title>Criando sua IDa</Title>
            </Header>
            <TermsFieldset
              agreedTerm={agreedTerm}
              setAgreedTerm={setAgreedTerm}
              submit={() =>
                history.push(`/signup/basic/${history.location.search}`)
              }
            />
          </Route>
          <Route path="/signup/basic">
            <Header>
              <ActionText>
                Inscreva-se no <strong>S.O.M</strong> através da IDa!
              </ActionText>
              <SignupText>
                Já é cadastrado?{' '}
                <Link to={`/signin${history.location.search}`}>Faça login</Link>
              </SignupText>
              <Title>Criando sua IDa</Title>
            </Header>
            <BasicInformationFieldset
              username={username}
              fullname={fullname}
              email={email}
              password={password}
              setFullname={setFullname}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              errors={errors}
              loading={loading}
              submit={() => {
                signupUser({
                  username,
                  fullname,
                  email,
                  password,
                  setErrors,
                  history,
                  search: history.location.search,
                  setLoading,
                  setAuth,
                });
              }}
            />
          </Route>
          <Route path="/signup/success">
            <Success
              loading={loading}
              submit={() =>
                toConfirmEmail({
                  email,
                  history,
                  setLoading,
                  search: history.location.search,
                })
              }
            />
          </Route>
          <Route path="/signup/confirm">
            <EmailConfirmationFieldset
              resend={() => {
                setResentConfirmation(true);
                resendEmailConfirmation({ setLoading, email });
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
              error={errors.code}
              code={code}
              setCode={setCode}
              resentConfirmation={resentConfirmation}
            />
          </Route>
          <Route path="/signup/end">
            <EndFieldset
              loading={loading}
              appName={appName}
              submit={() => {
                setLoading(true);

                const data = {
                  ida: auth._id,
                  token: auth.token,
                  email: auth.email.address,
                  first_name: auth.first_name,
                  last_name: auth.last_name,
                };

                socket.emit('update_auth', { user: data, client_id: clientId });
              }}
            />
          </Route>
        </Switch>
      </Main>
    </Section>
  );
};

export default Signup;
