import { Link } from 'react-router-dom';
import DefaultButton from '../../../../../components/base/default-button/default-button';
import Checkbox from '../../../../../components/base/checkbox/checkbox';
import {
  Fieldset,
  Text,
  TermsText,
  CheckboxWrapper,
  ButtonWrapper,
} from './terms-fieldset.style';

/**
 *
 * @param param0
 * @returns
 */
const TermsFieldset = ({ agreedTerm, setAgreedTerm, submit }: any) => (
  <Fieldset>
    <Text>
      A IDa é um serviço de autenticação digital que conecta ativistas ao Banco
      de Tecnologias da Mídia NINJA.
    </Text>
    <Link to="https://idativista.org">Saiba mais sobre a IDa</Link>
    <CheckboxWrapper>
      <Checkbox checked={agreedTerm} onClick={() => setAgreedTerm(!agreedTerm)}>
        <TermsText>
          Li e concordo com os{' '}
          <Link to="https://idativista.org/termos">
            Termos de uso e privacidade da IDa{' '}
          </Link>
        </TermsText>
      </Checkbox>
    </CheckboxWrapper>
    <ButtonWrapper>
      <DefaultButton disabled={!agreedTerm} onClick={submit}>
        Próximo
      </DefaultButton>
    </ButtonWrapper>
  </Fieldset>
);

export default TermsFieldset;
