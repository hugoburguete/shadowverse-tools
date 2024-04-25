import Cookies from 'js-cookie';
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';

type AuthContextType = {
  authenticated: boolean;
  authenticate: (accessToken: string, refreshToken: string) => void;
  accessToken: string | null;
  refreshToken: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  authenticate: () => {},
  accessToken: null,
  refreshToken: null,
});

export const AuthContextProvider = ({
  children,
}: PropsWithChildren): React.JSX.Element => {
  const [authenticated, setAuthenticated] = useState(false);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const authenticate = (accessToken: string, refreshToken: string) => {
    Cookies.set('access-token', accessToken);
    Cookies.set('refresh-token', refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    setAuthenticated(true);
  };

  useEffect(() => {
    const at = Cookies.get('access-token');
    const rt = Cookies.get('refresh-token');

    if (at && rt) {
      setAuthenticated(true);
      setAccessToken(at);
      setRefreshToken(rt);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated, authenticate, refreshToken, accessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
