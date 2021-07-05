import PropTypes from 'prop-types';
import Input from '../../../../../components/base/input/input';
import DefaultButton from '../../../../../components/base/default-button/default-button';
import {
  Fieldset,
  InputGroup,
  ButtonWrapper,
} from './basic-information-fieldset.style';

/**
 *
 * @param param0
 * @returns
 */
const BasicInformationFieldset = ({
  fullname,
  email,
  password,
  setFullname,
  setEmail,
  setPassword,
  submit,
  errors,
  loading,
}: any) => (
  <Fieldset>
    <InputGroup>
      <Input
        id="fullname"
        label="Nome completo"
        value={fullname}
        onChange={setFullname}
        error={errors.fullname}
      />
    </InputGroup>
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
      <DefaultButton
        disabled={!fullname || !password || !email}
        onClick={submit}
        loading={loading}
      >
        Próximo
      </DefaultButton>
    </ButtonWrapper>
  </Fieldset>
);

BasicInformationFieldset.propTypes = {
  fullname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setFullname: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

export default BasicInformationFieldset;
