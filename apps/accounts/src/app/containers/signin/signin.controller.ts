import { saveUserOnLocalStorage } from '../../utils/localStorage.util';
import { signin } from './signin.service';

interface UserLogin {
  email: string;
  password: string;
}

interface SigninParams extends UserLogin {
  setErrors(error: any): void;
  setLoading(status: boolean): void;
  socket: any;
  clientId: string;
}

const status: { [key: string]: string } = {
  'signin/invalid-password': 'Senha incorreta',
  'signin/user-not-found': 'Usuário não encontrado',
};

const types = {
  USER_NOT_FOUND: 'signin/user-not-found',
  WRONG_PASSWORD: 'signin/invalid-password',
};

/**http://ida-socket-dev.eba-pjigudcf.us-west-2.elasticbeanstalk.com/
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
  password,
  setErrors,
  setLoading,
  socket,
  clientId,
}: SigninParams): Promise<void> => {
  setLoading(true);
  setErrors({});

  let signinResponse;

  try {
    signinResponse = await signin({ email, password });
  } catch (err) {
    if (err.response && err.response.data && err.response.data.error) {
      const { error } = err.response.data;
      switch (error) {
        case types.WRONG_PASSWORD:
          setErrors({ password: status[error] });
          setLoading(false);
          return;
        case types.USER_NOT_FOUND:
          setErrors({ email: status[error] });
          setLoading(false);
          return;
        default:
          return;
      }
    }

    setLoading(false);
    throw err;
  }

  saveUserOnLocalStorage({
    ida: signinResponse.data._id,
    token: signinResponse.data.token,
    user: {
      email: signinResponse.data.email,
      first_name: signinResponse.data.first_name,
    },
  });

  setErrors({});
  setLoading(false);

  const data = {
    ida: signinResponse.data._id,
    token: signinResponse.data.token,
    email: signinResponse.data.email.address,
    first_name: signinResponse.data.first_name,
    last_name: signinResponse.data.last_name,
  };

  socket.emit('update_auth', { user: data, client_id: clientId });
};
