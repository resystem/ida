import DefaultButton from '../../../../../components/base/default-button/default-button';
import { Fieldset, Title, Text, ButtonWrapper } from './success-fieldset.style';

/**
 *
 * @param param0
 * @returns
 */
const SuccessFieldset = ({ submit, loading }: any) => (
  <Fieldset>
    <Title>Conta criada com sucesso</Title>
    <Text>
      Agora vamos confirmar os seus dados. Clique em próximo que já estamos
      chegando no SOM
    </Text>
    <ButtonWrapper>
      <DefaultButton onClick={submit} loading={loading}>
        Próximo
      </DefaultButton>
    </ButtonWrapper>
  </Fieldset>
);

export default SuccessFieldset;
