import axios from 'axios';

interface SigninData {
  email: string;
}

/**
 * function to request reset password on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email user email
 * @returns {Pomise} request response
 */
export const requestForgotPassword = ({ email }: SigninData): any =>
  axios.post(
    `${process.env.NX_API_URL}/api/user/request-reset-password`,
    { email },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );

/**
 * function to request user confirmation on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email email to confirm
 * @param {string} data.code code to be validate
 * @returns {Pomise} request response
 */
export const validateResetPasswordCode = ({
  email,
  code,
}: any): Promise<any> => {
  return axios.post(
    `${process.env.NX_API_URL}/api/user/validate-reset-password-code`,
    { email, code },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};

/**
 * function to reset user password on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email email to confirm
 * @param {string} data.code code to be validate
 * @returns {Pomise} request response
 */
export const resetPassword = ({ email, code, password }: any): Promise<any> =>
  axios.post(
    `${process.env.NX_API_URL}/api/user/reset-password`,
    { email, code, password },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
