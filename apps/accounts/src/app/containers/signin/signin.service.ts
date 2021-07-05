import axios from 'axios';

interface SigninData {
  email: string;
  password: string;
}

/**
 * function to request login on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.email user email
 * @param {string} data.password user password
 * @returns {Pomise} request response
 */
export const signin = ({ email, password }: SigninData): any =>
  axios.post(
    `${process.env.NX_API_URL}/user/signin`,
    { email, password },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
