import { verify as verifyService } from './app.service';

interface VerifyInterface {
  appId: string;
  appKey: string;
  onVerified(): void;
  history: any;
}

/**
 * function to valdiate and request authentication to the repository
 * @param {object} data user information to validate and authenticate
 * @param {string} data.appId application id to be verify
 * @param {string} data.appKey application token to be used on verification
 */
export const verify = async ({
  appId,
  appKey,
  onVerified,
  history,
}: VerifyInterface) => {
  let response;

  try {
    response = await verifyService({ appId, appKey });
  } catch (err) {
    // try
    history.push('/error');
  }

  onVerified();
};
