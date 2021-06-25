import { Link } from 'react-router-dom';
import { Fieldset, Text } from './terms-fieldset.style';

const TermsFieldset = () => (
  <Fieldset>
    <Text>
      A IDa é um serviço de autenticação digital que conecta ativistas ao Banco
      de Tecnologias da Mídia NINJA.
    </Text>
    <Link to="https://idativista.org">Saiba mais sobre a IDa</Link>
  </Fieldset>
);

export default TermsFieldset;
