import { FormEvent, useState } from 'react';
import FormGroup from '../forms/FormGroup';
import Input from '../forms/Input';
import Label from '../forms/Label';

export type RegistrationDetails = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export type RegistrationFormProps = {
  onRegister: (details: RegistrationDetails) => void;
};

const RegistrationForm = ({
  onRegister,
}: RegistrationFormProps): JSX.Element => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onRegister({
      firstname,
      lastname,
      email,
      password,
    });
  };
  return (
    <form action="" onSubmit={onFormSubmit}>
      {/* First Name */}
      <FormGroup>
        <Label htmlFor="first-name">First name: </Label>
        <Input
          id="first-name"
          placeholder="Your first name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
          type={'text'}
          minLength={2}
          maxLength={40}
          value={firstname}
        />
      </FormGroup>

      {/* Last Name */}
      <FormGroup>
        <Label htmlFor="last-name">Last name: </Label>
        <Input
          id="last-name"
          placeholder="Your last name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
          type={'text'}
          minLength={2}
          maxLength={40}
          value={lastname}
        />
      </FormGroup>

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

      {/* Confirm Password */}
      <FormGroup>
        <Label htmlFor="confirm-password">Confirm Password: </Label>
        <Input
          required
          type="password"
          id="confirm-password"
          placeholder="Confirm your password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
        />
      </FormGroup>

      <button type="submit">Create account</button>
    </form>
  );
};

export default RegistrationForm;
