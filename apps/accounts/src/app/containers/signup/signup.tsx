import { Link, Route } from 'react-router-dom';
import TermsFieldset from './components/fieldsets/terms-fieldset/terms-fieldset';
import {
  Section,
  Header,
  ActionText,
  SignupText,
  Title,
  Main,
} from './signup.style';

const Signup = () => {
  return (
    <Section>
      <Header>
        <ActionText>
          Inscreva-se no <strong>S.O.M</strong> através da IDa!
        </ActionText>
        <SignupText>
          Já é cadastrado? <Link to="/signin">Faça login</Link>
        </SignupText>
        <Title>Criando sua IDa</Title>
      </Header>
      <Main>
        <Route path="/">
          <TermsFieldset />
        </Route>
      </Main>
    </Section>
  );
};

export default Signup;
