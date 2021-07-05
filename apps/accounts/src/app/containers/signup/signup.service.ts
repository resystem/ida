import axios from 'axios';

/**
 * function to request user on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.search user id, email or username to be found
 * @returns {Pomise} request response
 */
export const getUser = ({ search }: any): Promise<any> => {
  return axios.get(`${process.env.NX_API_URL}/api/user/${search}`, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

interface SignupData {
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}

/**
 * function to request user register on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email user email
 * @param {string} data.password user password
 * @returns {Pomise} request response
 */
export const signup = ({
  password,
  first_name,
  last_name,
  email,
}: SignupData) => {
  return axios.post(
    `${process.env.NX_API_URL}/api/user/signup`,
    {
      password,
      email: { address: email, valid: false, confirmation_code: null },
      first_name,
      last_name,
    },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};

/**
 * function to request user email confirmation on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email user id, email or username to be found
 * @returns {Pomise} request response
 */
export const requestEmailConfirmation = ({ email }: any): Promise<any> => {
  return axios.post(
    `${process.env.NX_API_URL}/api/user/request-email-confirmation`,
    { email },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};

/**
 * function to request user email confirmation on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email email to confirm
 * @param {string} data.code code to be validate
 * @returns {Pomise} request response
 */
export const validateEmailCode = ({ email, code }: any): Promise<any> => {
  return axios.post(
    `${process.env.NX_API_URL}/api/user/validate-email-code`,
    { email, code },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};
