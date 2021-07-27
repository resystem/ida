import { extractNumbers } from 'apps/accounts/src/app/utils/numbers.util';
import { useEffect } from 'react';
import {
  Fieldset,
  Header,
  Title,
  Description,
  InputGroup,
  InputCode,
  ErrorText,
  ResendText,
  LinkButton,
} from './email-confirmation-fieldset.style';

/**
 *
 * @param param0
 * @returns
 */
const EmailConfirmationFieldset = ({
  resend,
  email,
  error,
  code,
  setCode,
  submit,
  resentConfirmation,
}: any) => {
  useEffect(() => {
    if (code.length === 4) submit();
  }, [code]);

  return (
    <Fieldset>
      <Header resent={resentConfirmation}>
        <Title>
          {resentConfirmation
            ? 'E-mail reenviado!'
            : 'Enviamos um e-mail para você!'}{' '}
        </Title>
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
      <Description>
        Insira o código (apenas os números) enviado para {email}. Verifique sua caixa de spam e
        outros filtros de email.
      </Description>
      <InputGroup>
        <InputCode
          placeholder="XXXX"
          onChange={({ target }) => {
            setCode(extractNumbers(target.value));
          }}
        />
        <ErrorText hide={!error}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33337 7.99992C1.33337 4.31992 4.31337 1.33325 7.99337 1.33325C11.68 1.33325 14.6667 4.31992 14.6667 7.99992C14.6667 11.6799 11.68 14.6666 7.99337 14.6666C4.31337 14.6666 1.33337 11.6799 1.33337 7.99992ZM8.66671 5.33325C8.66671 4.96658 8.36671 4.66658 8.00004 4.66658C7.63337 4.66658 7.33337 4.96658 7.33337 5.33325V7.99992C7.33337 8.36659 7.63337 8.66659 8.00004 8.66659C8.36671 8.66659 8.66671 8.36659 8.66671 7.99992V5.33325ZM8.00004 13.3333C5.05337 13.3333 2.66671 10.9466 2.66671 7.99992C2.66671 5.05325 5.05337 2.66659 8.00004 2.66659C10.9467 2.66659 13.3334 5.05325 13.3334 7.99992C13.3334 10.9466 10.9467 13.3333 8.00004 13.3333ZM7.33337 9.99992V11.3333H8.66671V9.99992H7.33337Z"
              fill="#FF2626"
            />
          </svg>{' '}
          {error}
        </ErrorText>
      </InputGroup>
      <ResendText>
        Não recebeu? <LinkButton onClick={resend}>Reenviar e-mail</LinkButton>
      </ResendText>
    </Fieldset>
  );
};

export default EmailConfirmationFieldset;
