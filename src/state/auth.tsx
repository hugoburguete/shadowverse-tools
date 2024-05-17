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
  logout: () => void;
  accessToken: string | null;
  refreshToken: string | null;
};

export const ACCESS_TOKEN_COOKIE_KEY = 'access-token';
export const REFRESH_TOKEN_COOKIE_KEY = 'refresh-token';

export const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  authenticate: () => {},
  logout: () => {},
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
    setAuthCookies(accessToken, refreshToken);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    setAuthenticated(true);
  };

  const logout = () => {
    clearAuthCookies();
    Cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
    Cookies.remove(REFRESH_TOKEN_COOKIE_KEY);
    setAccessToken(null);
    setRefreshToken(null);

    setAuthenticated(false);
  };

  useEffect(() => {
    const at = Cookies.get(ACCESS_TOKEN_COOKIE_KEY);
    const rt = Cookies.get(REFRESH_TOKEN_COOKIE_KEY);

    if (at && rt) {
      setAuthenticated(true);
      setAccessToken(at);
      setRefreshToken(rt);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ authenticated, authenticate, refreshToken, accessToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const clearAuthCookies = () => {
  Cookies.remove(ACCESS_TOKEN_COOKIE_KEY);
  Cookies.remove(REFRESH_TOKEN_COOKIE_KEY);
};

export const setAuthCookies = (accessToken: string, refreshToken: string) => {
  Cookies.set('access-token', accessToken);
  Cookies.set('refresh-token', refreshToken);
};
