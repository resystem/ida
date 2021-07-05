import DefaultButton from '../../../../../components/base/default-button/default-button';
import {
  Fieldset,
  Header,
  Title,
  Text,
  ButtonWrapper,
} from './end-fieldset.style';

/**
 *
 * @param param0
 * @returns
 */
const EndFieldset = ({ submit, appName, loading }: any) => (
  <Fieldset>
    <Header resent>
      <Title>Seu cadastro foi confirmado</Title>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM9.6 18L3.6 12L5.292 10.308L9.6 14.604L18.708 5.496L20.4 7.2L9.6 18Z"
          fill="#48FEA7"
        />
      </svg>
    </Header>
    <Text>
      Você pode entrar no <a href="https://idativista.org">portal da IDa</a> a
      qualquer momento para conhecer outras iniciativas
    </Text>
    <ButtonWrapper>
      <DefaultButton onClick={submit} loading={loading} block>
        Continuar para {appName}
      </DefaultButton>
    </ButtonWrapper>
  </Fieldset>
);

export default EndFieldset;
