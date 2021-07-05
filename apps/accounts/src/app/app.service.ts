import axios from 'axios';
import { App } from './models/app';

export interface VerifyData {
  appId: string;
  appKey: string;
}

/**
 * function to request application verify on IDA api
 * @param {object} data user information to be send with the request
 * @param {string} data.appId application id to be verify
 * @param {string} data.appToken application token to be used on verification
 * @returns {Pomise} request response
 */
export const verify = ({ appId, appKey }: VerifyData): Promise<App> => {
  return axios.post(
    `${process.env.NX_API_URL}/api/app/verify`,
    { id: appId, key: appKey },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },
  );
};
