import {
  requestForgotPassword,
  resetPassword,
  validateResetPasswordCode,
} from './forgot-password.service';

interface UserLogin {
  email: string;
}

interface SigninParams extends UserLogin {
  setErrors(error: any): void;
  setLoading(status: boolean): void;
  history: any;
  search: string;
}

const status: { [key: string]: string } = {
  'forgot-password/user-not-found': 'Usuário não encontrado',
};

const types = {
  USER_NOT_FOUND: 'signin/user-not-found',
};

/**
 * function to valdiate and request authentication to the repository
 * @param {object} data user information to validate and authenticate
 * @param {string} data.email user email
 * @param {string} data.password user password
 * @param {string} data.setErrors function to set errors on story
 * @param {string} data.setLoading function to set loading state on story
 * @param {string} data.appSource parent Window object
 */
export const submit = async ({
  email,
  setErrors,
  setLoading,
  history,
  search,
}: SigninParams): Promise<void> => {
  setLoading(true);
  setErrors({});

  let signinResponse;

  try {
    signinResponse = await requestForgotPassword({ email });
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      const { error } = err.response.data;
      console.log(error);
      switch (error) {
        case types.USER_NOT_FOUND:
          setErrors({ email: status[error] });
          setLoading(false);
          return;
        default:
          history.push(`/forgot-password/confirm${search}`);
          return;
      }
    }

    history.push(`/forgot-password/confirm${search}`);
    setLoading(false);
  }

  history.push(`/forgot-password/confirm${search}`);
  setErrors({});
  setLoading(false);
};

/**
 *
 */
export const resendEmailConfirmation = async ({
  email,
  setLoading,
  history,
  search,
}: any) => {
  setLoading(true);

  try {
    await requestForgotPassword({ email });
  } catch (err) {
    history.push(`/error${search}`);
    setLoading(false);
  }

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
    await validateResetPasswordCode({ email, code });
  } catch (err) {
    // to do
    setLoading(false);
    setErrors({ code: 'Código inválido' });
    return;
  }

  history.push(`/forgot-password/new-password${search}`);
  setLoading(false);
};

/**
 *
 */
export const submitResetPassword = async ({
  setLoading,
  email,
  code,
  password,
  search,
  history,
  setErrors,
}: any) => {
  setErrors({});
  setLoading(true);

  if (password.length < 6) {
    setErrors({
      newPassword: 'A senha deve conter no mínimo 6 caracteres',
    });

    return;
  }

  try {
    await resetPassword({ email, code, password });
  } catch (err) {
    // to do
    setLoading(false);
    history.push(`/error${search}`);
    return;
  }

  history.push(`/forgot-password/end${search}`);
  setLoading(false);
};
