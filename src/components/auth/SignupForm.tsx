import React from 'react';
import axios from 'axios';
import { FormWrapper } from '../ui/Form/FormWrapper';
import { InputField } from '../ui/Form/InputField';
import { AuthSocials } from './AuthSocials';
import { useRouter } from 'next/router';

export const SignupForm: React.FC = () => {
  const router = useRouter();
  const [inputs, setInputs] = React.useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await axios.post('/api/auth/signup', inputs);
    console.log(user);
  };

  const submitDisabled = () => {
    const { email, username, password, confirmPassword } = inputs;
    return email === '' || password === '' || username === '' || confirmPassword === '';
  };

  return (
    <>
      <FormWrapper
        submitDisabled={submitDisabled()}
        handleSubmit={handleSubmit}
        styles='md:w-8/12 lg:w-5/12 lg:ml-20'
      >
        <AuthSocials />
        <InputField
          label='Username'
          type='text'
          name='username'
          placeholder='username'
          minLength={4}
          maxLength={15}
          value={inputs.username}
          onChange={handleChange}
          required
        />
        <InputField
          label='Email'
          type='email'
          name='email'
          placeholder='email'
          minLength={5}
          maxLength={25}
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <InputField
          label='Password'
          type='password'
          name='password'
          placeholder='password'
          minLength={8}
          maxLength={25}
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <InputField
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          placeholder='confirm password'
          value={inputs.confirmPassword}
          onChange={handleChange}
          required
        />
      </FormWrapper>
      <span className='mt-6'>
        Already have an account?{' '}
        <a
          className='hyperlink'
          onClick={() => {
            router.push('/login');
          }}
        >
          Login
        </a>
      </span>
    </>
  );
};
