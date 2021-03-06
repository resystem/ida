import { ReactNode, useEffect, useState } from 'react';
import queryString from 'query-string';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  useLocation,
  Switch,
} from 'react-router-dom';
import ErrorPage from './containers/error-page/error-page';
import LastUsers from './containers/last-users/last-users';
import Skeleton from './components/skeleton/skeleton-page';
import Brand from './components/brand/brand';
import Signup from './containers/signup/signup';
import Signin from './containers/signin/signin';
import ForgotPassword from './containers/forgot-password/forgot-password';
import { Container, HeaderContent, Main, BGSVG } from './app.style';
import { initSocketConnection, verify } from './app.controller';
import '../assets/css/reset.css';
import { App as AppModel } from './models/app';

interface LocalUser {
  ida: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
  token: string;
}

/**
 * Content to verify the app
 * @param params
 * @returns
 */
const VerifyContent = ({
  children,
  onVerified,
  setLastLoggedUsers,
  setApp,
  setSocket,
  setClientId,
}: {
  children: ReactNode;
  onVerified(): void;
  setApp(app: AppModel): void;
  setClientId(clientId: string): void;
  setSocket(socket: any): void;
  setLastLoggedUsers(users: any): void;
}) => {
  const history = useHistory();
  const location = useLocation();
  const { k, i, c }: any = queryString.parse(location.search);

  useEffect(() => {
    if (!k || !i || !c) {
      onVerified();
      history.push(`/error${location.search}`);
    } else {
      setClientId(c);
      verify({ appKey: k, appId: i, onVerified, history, setApp });
      initSocketConnection({ clientId: c, setSocket });

      // get last logged users saved on local storage
      const localUsers = window.localStorage.getItem('ida@users') || '{}';
      const parsedLocalUsers = JSON.parse(localUsers).users || [];

      if (parsedLocalUsers.length < 1) {
        // redirect to register page
        history.push(`/signup${location.search}`);
      }

      setLastLoggedUsers(
        parsedLocalUsers.map(({ ida, token, user }: LocalUser) => ({
          id: ida,
          token,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          avatarURI: null,
        })),
      );
    }
  }, []);

  return <div>{children}</div>;
};

/**
 *
 * @returns
 */
export const App = () => {
  const [globalLoading, setGlobalLoading] = useState(true);
  const [clientId, setClientId] = useState<string | null>(null);
  const [lastLoggedUsers, setLastLoggedUsers] = useState([]);
  const [app, setApp] = useState<AppModel | null>(null);
  const [socket, setSocket] = useState<any | null>(null);

  return (
    <Router>
      <VerifyContent
        onVerified={() => setGlobalLoading(false)}
        setLastLoggedUsers={setLastLoggedUsers}
        setApp={setApp}
        setSocket={setSocket}
        setClientId={setClientId}
      >
        <Container>
          <HeaderContent>
            <BGSVG
              viewBox="0 0 255 197"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="8"
                  y="-67"
                  width="272"
                  height="265"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M278.697 109.423L211.045 -53.7565C207.92 -61.1259 200.934 -66.0388 192.478 -66.5652C184.021 -67.0916 176.484 -62.8805 172.623 -55.862L151.895 -18.8714C148.036 -20.5623 144.093 -22.022 140.084 -23.2261L73.1677 -43.4041C68.5718 -44.8078 63.6082 -44.106 59.5637 -41.2986C55.5193 -38.4912 53.3133 -34.2801 53.3133 -29.7181V9.78957L28.3114 2.21539C23.7155 0.811699 18.7519 1.51354 14.7075 4.32092C10.8469 7.12831 8.45703 11.3394 8.45703 16.0768V159.078C8.45703 168.728 15.0752 177.326 24.6347 180.133L78.4989 196.451C79.9696 196.978 81.6242 197.153 83.0949 197.153C86.2201 197.153 89.3453 196.276 91.919 194.346C95.9635 191.538 98.1695 187.327 98.1695 182.765V143.142L137.143 154.867C145.783 157.499 154.424 158.903 162.696 158.903C176.3 158.903 188.985 155.218 199.096 148.024C208.749 141.275 215.798 131.91 219.824 120.686L256.821 131.706C258.659 132.233 260.498 132.408 262.152 132.408C267.116 132.408 271.712 130.478 275.205 126.969C279.984 122.407 281.271 115.564 278.697 109.423ZM88.9776 140.376V182.765C88.9776 184.52 88.0585 186.099 86.5878 187.152C85.1171 188.204 83.2787 188.555 81.4403 188.029L27.5761 171.711C21.8771 169.957 18.0166 164.868 18.0166 159.253V16.2523C18.0166 14.4977 18.9357 12.9185 20.4064 11.8658C21.3256 10.9885 22.4286 10.6375 23.7155 10.6375C23.9913 10.6375 24.313 10.6814 24.6347 10.7253C24.9564 10.7691 25.2781 10.813 25.5539 10.813L53.3133 19.2226V113.458C53.3133 123.109 59.9314 131.706 69.4909 134.514L88.9776 140.376ZM88.9776 130.907L72.4323 125.916C66.7334 124.162 62.8728 119.073 62.8728 113.458V22.1186L79.4181 27.1309C85.1171 28.8855 88.9776 33.9739 88.9776 39.5887V130.907ZM98.1695 133.68V39.5887C98.3533 30.1138 91.919 21.5161 82.1757 18.5333L62.8728 12.6856V-29.7181C62.8728 -31.4727 63.792 -33.0519 65.2627 -34.1047C66.1819 -34.8065 67.4687 -35.1574 68.5718 -35.1574C69.0082 -35.1574 69.4446 -35.0476 69.9721 -34.9148C70.1112 -34.8797 70.2567 -34.8431 70.4101 -34.8065L137.143 -14.6284C140.623 -13.5788 144.051 -12.3206 147.412 -10.8726L107.729 59.9425C104.42 65.7328 104.052 72.5758 106.81 78.7169C109.384 84.8581 114.715 89.4201 121.333 91.3501L210.753 117.984C207.351 127.416 201.472 135.235 193.397 140.83C179.425 150.481 160.49 152.411 139.901 146.27L98.1695 133.68ZM180.896 -51.6509L160.239 -14.7889C196.67 4.93436 223.73 45.0707 223.73 82.9281V97.1405C223.73 102.314 223.231 107.28 222.258 111.992L259.578 123.109C262.704 124.161 266.013 123.284 268.219 121.003C270.425 118.722 271.16 115.388 269.873 112.581L202.221 -50.5982C200.567 -54.6338 196.522 -57.4412 191.926 -57.6166H191.191C186.779 -57.6166 182.918 -55.3356 180.896 -51.6509ZM214.171 83.1036C214.327 48.2492 189.311 11.3717 155.77 -6.81232L116.002 64.1536C114.163 67.4874 113.979 71.523 115.45 75.2077C116.921 78.8924 120.23 81.5243 124.09 82.7525L213.103 109.266C213.81 105.466 214.171 101.473 214.171 97.3159V83.1036Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.5"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M255 187C255 192.523 250.523 197 245 197H10C4.47715 197 -1.4913e-08 192.523 0 187L4.77492e-07 10.168C4.92405e-07 4.64512 4.47715 0.167969 10 0.167969L245 0.167969C250.523 0.167969 255 4.64512 255 10.168V187Z"
                    fill="black"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="144.228"
                  y1="-66.6094"
                  x2="144.228"
                  y2="197.153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4F4F4F" />
                  <stop offset="1" stopColor="#4F4F4F" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="255" height="197" fill="white" />
                </clipPath>
              </defs>
            </BGSVG>
          </HeaderContent>
          <Main>
            <Brand />
            {globalLoading ? (
              <Skeleton />
            ) : (
              <Switch>
                <Route exact path="/">
                  <LastUsers
                    users={lastLoggedUsers}
                    appName={app?.name}
                    socket={socket}
                    clientId={clientId}
                  />
                </Route>
                <Route path="/signin">
                  <Signin appName={app?.name || 'APP'} socket={socket} />
                </Route>
                <Route path="/signup">
                  <Signup
                    clientId={clientId || ''}
                    appName={app?.name || 'APP'}
                    socket={socket}
                  />
                </Route>
                <Route path="/forgot-password">
                  <ForgotPassword appName={app?.name || 'APP'} />
                </Route>
                <Route exact path="/error">
                  <ErrorPage />
                </Route>
              </Switch>
            )}
          </Main>
        </Container>
      </VerifyContent>
    </Router>
  );
};

export default App;
