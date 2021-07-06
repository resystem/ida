import { verify } from './last-users.service';

interface QuicklySigninParams {
  ida: string;
  token: string;
  clientId: string;
  email: string;
  socket: any;
  history: any;
  setLoading(loading: boolean): void;
}

/**
 * function to request token validaiton on IDA api
 * @param {object} data user information to validate and authenticate
 * @param {string} data.token user username
 * @param {string} data.token user token
 * @param {string} data.ida user ida
 * @param {string} data.appSource parent Window object
 */
export const quicklySignin = async ({
  email,
  ida,
  clientId,
  token,
  socket,
  setLoading,
  history,
}: QuicklySigninParams) => {
  let signinResponse;
  setLoading(true);
  try {
    signinResponse = await verify({ token });
  } catch (err) {
    history.push(`/signin/${history.location.query}&email=${email}`);
    setLoading(false);
    throw err;
  }

  const data = {
    ida: signinResponse.data._id,
    token: signinResponse.data.token,
    email: signinResponse.data.email.address,
    first_name: signinResponse.data.first_name,
    last_name: signinResponse.data.last_name,
  };

  socket.emit('update_auth', { user: data, client_id: clientId });
  setLoading(false);
};
