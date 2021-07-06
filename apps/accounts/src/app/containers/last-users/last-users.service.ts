import axios from 'axios';

export interface VerifyData {
  token: string;
}

/**
 * function to request user token verification on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.token token to verify
 * @returns {Pomise} request response
 */
export const verify = ({ token }: VerifyData): Promise<any> => {
  return axios.post(
    `${process.env.NX_API_URL}/api/user/validate`,
    { token },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};
