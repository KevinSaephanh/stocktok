import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FormWrapper } from '@components/Form/FormWrapper';
import { InputField } from '@components/Form/InputField';
import { AuthSocials } from '@components/Icons/AuthSocials';

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = await signIn('credentials');
    console.log(user);
  };

  const submitDisabled = () => {
    const { email, password } = inputs;
    return email === '' || password === '';
  };

  return (
    <>
      <FormWrapper
        submitDisabled={submitDisabled()}
        handleSubmit={handleSubmit}
        styles="md:w-8/12 lg:w-5/12 lg:ml-20"
      >
        <AuthSocials />
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="email"
          minLength={5}
          maxLength={25}
          value={inputs.email}
          onChange={handleChange}
          inputStyles="mb-6"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          minLength={8}
          maxLength={25}
          value={inputs.password}
          onChange={handleChange}
          required
        />
      </FormWrapper>
      <span className="mt-6">
        Don&rsquo;t have an account?{' '}
        <a
          className="hyperlink"
          onClick={() => {
            router.push('/signup');
          }}
        >
          Sign up
        </a>
      </span>
    </>
  );
};
