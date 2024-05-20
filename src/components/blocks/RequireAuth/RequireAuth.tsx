import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../state/auth';

export type RequireAuthProps = {};

export const RequireAuth: React.FC<RequireAuthProps> = () => {
  const { authenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
