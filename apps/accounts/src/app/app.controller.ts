import socketClient from 'socket.io-client';
import { verify as verifyService } from './app.service';
import { App } from './models/app';

interface VerifyInterface {
  appId: string;
  appKey: string;
  onVerified(): void;
  setApp(app: App | null): void;
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
  setApp,
  history,
}: VerifyInterface) => {
  let response: any;

  try {
    response = await verifyService({ appId, appKey });
  } catch (err) {
    // try
    history.push(`/error?${history.location.search}`);
  }

  setApp(response?.data || null);
  onVerified();
};

/**
 *
 * @param param0
 */
export const initSocketConnection = async ({ setSocket, clientId }: any) => {
  if (clientId) {
    const socket = await socketClient(process.env.NX_SOCKET_API || '', {
      transports: ['websocket'],
    });

    socket.emit('init', { client_type: 'ida', client_id: clientId });
    socket.on('error-listenner', () => null);

    setSocket(socket);
  }
};
