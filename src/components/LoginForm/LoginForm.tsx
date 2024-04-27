import { FormEvent, useState } from 'react';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import Label from '../forms/Label';

export type LoginDetails = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onLogin: (details: LoginDetails) => void;
};

const LoginForm = ({ onLogin }: LoginFormProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin({
      email,
      password,
    });
  };
  return (
    <form action="" onSubmit={onFormSubmit}>
      {/* Email */}
      <FormGroup>
        <Label htmlFor="email">Email: </Label>
        <Input
          id="email"
          placeholder="Your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          type={'text'}
          value={email}
        />
      </FormGroup>

      {/* Password */}
      <FormGroup>
        <Label htmlFor="password">Password: </Label>
        <Input
          required
          type="password"
          id="password"
          placeholder="Your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
      </FormGroup>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
