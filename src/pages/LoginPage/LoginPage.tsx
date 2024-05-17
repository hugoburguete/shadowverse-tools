import { useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm, { LoginDetails } from '../../components/LoginForm/LoginForm';
import Heading from '../../components/typography/Heading';
import P from '../../components/typography/Paragraph';
import { MUTATION_LOGIN_USER } from '../../gql/queries/user';
import { AuthContext } from '../../state/auth';

const LoginPage = () => {
  const [loginUser, { loading, data, error }] =
    useMutation(MUTATION_LOGIN_USER);
  const navigate = useNavigate();
  const { authenticate, authenticated } = useContext(AuthContext);
  const submitForm = (loginInput: LoginDetails) => {
    if (!loading) {
      loginUser({
        variables: {
          loginInput,
        },
      });
    }
  };

  useEffect(() => {
    if (data && !error) {
      const {
        login: { accessToken, refreshToken },
      } = data;

      authenticate(accessToken, refreshToken);
      navigate('/');
    }
  }, [data, error, navigate, authenticate]);

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
  }, [authenticated, navigate]);

  const transformValidationErrorToArray = (error: string) => {
    const hackyStringCheck = 'Invalid payload: ';
    if (error.indexOf(hackyStringCheck) > -1) {
      return error.replace(hackyStringCheck, '').split(',');
    }
    return [error];
  };

  return (
    <div>
      <Heading level={1}>Login</Heading>

      <LoginForm onLogin={submitForm} />

      {loading && <p>loading...</p>}

      {error && (
        <ul>
          {transformValidationErrorToArray(error.message).map((err, index) => {
            return (
              <li key={index}>
                <P>{err}</P>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LoginPage;
