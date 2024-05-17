import { useMutation } from '@apollo/client';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm';
import { RegistrationDetails } from '../../components/RegistrationForm/RegistrationForm';
import Heading from '../../components/typography/Heading';
import P from '../../components/typography/Paragraph';
import { MUTATION_REGISTER_USER } from '../../gql/queries/user';
import { AuthContext } from '../../state/auth';

const RegistrationPage = () => {
  const [registerUser, { loading, data, error }] = useMutation(
    MUTATION_REGISTER_USER
  );
  const navigate = useNavigate();
  const { authenticate, authenticated } = useContext(AuthContext);
  const submitForm = (registerInput: RegistrationDetails) => {
    if (!loading) {
      registerUser({
        variables: {
          registerInput,
        },
      });
    }
  };

  useEffect(() => {
    if (data && !error) {
      const {
        register: { accessToken, refreshToken },
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
      <Heading level={1}>Register</Heading>

      <RegistrationForm onRegister={submitForm} />

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

export default RegistrationPage;
