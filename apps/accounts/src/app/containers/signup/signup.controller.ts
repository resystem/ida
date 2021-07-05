import { saveUserOnLocalStorage } from '../../utils/localStorage.util';
import {
  getUser,
  requestEmailConfirmation,
  signup,
  validateEmailCode,
} from './signup.service';

/**
 *
 * @param param0
 * @returns
 */
const validate = ({ fullname, username, email, password }: any): any => {
  const errors: any = {};

  if (!fullname.trim()) errors.fullname = 'Nome é obrigatório';
  if (!email.trim()) errors.email = 'E-mail é obrigatório';
  if (
    !/^[a-z0-9._-]{2,}@[a-z0-9]{2,}\.[a-z0-9]{2,}(\.[a-z0-9]{2,})*?$/i.test(
      email.trim(),
    )
  )
    errors.email = 'Insira um e-mail válido';
  if (!password.trim()) errors.password = 'Senha é obrigatória';
  if (password.length < 6)
    errors.password = 'A senha deve conter mais do que 6 caracteres';

  return errors;
};

/**
 *
 * @param param0
 * @returns
 */
export const signupUser = async ({
  fullname,
  email,
  password,
  setErrors,
  history,
  search,
  setLoading,
}: any) => {
  setLoading(true);

  const errors: any = validate({ fullname, email, password });
  if (Object.keys(errors).length) {
    setLoading(false);
    return setErrors(errors);
  }

  setErrors({});

  let response;

  try {
    response = await getUser({ search: email });
    if (response?.data?._id) {
      setLoading(false);
      return setErrors({ email: 'E-mail já cadastrado' });
    }
  } catch (err) {
    console.log(err);
  }

  const lastName = fullname.split(' ');
  lastName.splice(0, 1);

  response = await signup({
    email,
    password,
    first_name: fullname.split(' ')[0],
    last_name: lastName.join(' '),
  });

  saveUserOnLocalStorage({
    ida: response.data._id,
    token: response.data.token,
    user: response.data,
  });

  setLoading(false);
  history.push(`/signup/success${search}`);
};

/**
 *
 */
export const resendEmailConfirmation = async ({ email, setLoading }: any) => {
  setLoading(true);

  try {
    await requestEmailConfirmation({ email });
  } catch (err) {
    setLoading(false);
  }

  setLoading(false);
};

/**
 *
 */
export const toConfirmEmail = async ({
  email,
  setLoading,
  history,
  search,
}: any) => {
  setLoading(true);

  try {
    await requestEmailConfirmation({ email });
  } catch (err) {
    history.push(`/signup/confirm${search}`);
    setLoading(false);
  }

  history.push(`/signup/confirm${search}`);
  setLoading(false);
};

/**
 *
 */
export const requestCodeValidation = async ({
  setLoading,
  email,
  code,
  search,
  history,
  setErrors,
}: any) => {
  setErrors({});
  setLoading(true);

  try {
    await validateEmailCode({ email, code });
  } catch (err) {
    // to do
    setLoading(false);
    setErrors({ code: 'Código inválido' });
    return;
  }

  history.push(`/signup/end${search}`);
  setLoading(false);
};
