import Link from 'next/link';
import * as React from 'react';
import { AuthSocials } from './AuthSocials';

type AuthFormProps = {
  route: string;
};

export const AuthForm: React.FC<AuthFormProps> = ({ route }) => {
  const [submitButton, setSubmitButton] = React.useState('');
  const [spanText, setSpanText] = React.useState('');
  const [redirectLink, setRedirectLink] = React.useState({
    label: '',
    link: '',
  });

  React.useEffect(() => {
    if (route === 'login') {
      setSubmitButton('Sign in');
      setSpanText("Don't have an account? ");
      setRedirectLink({ label: 'Sign up', link: '/signup' });
    } else {
      setSubmitButton('Sign up');
      setSpanText('Already have an account? ');
      setRedirectLink({ label: 'Log in', link: '/login' });
    }
  }, []);

  return (
    <form className='md:w-8/12 lg:w-5/12 lg:ml-20'>
      <AuthSocials />

      <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
        <p className='text-center font-semibold mx-4 mb-0'>or</p>
      </div>

      <div className='mb-6'>
        <input
          type='text'
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Email address'
        />
      </div>

      {route === 'signup' ? (
        <div className='mb-6'>
          <input
            type='text'
            className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Username'
          />
        </div>
      ) : null}

      <div className='mb-6'>
        <input
          type='password'
          className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
          placeholder='Password'
        />
      </div>

      {route === 'login' ? (
        <div className='flex justify-between items-center mb-6'>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              id='exampleCheck3'
            />
            <label className='form-check-label inline-block text-gray-800'>Remember me</label>
          </div>
          <a
            href='#!'
            className='text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out'
          >
            Forgot password?
          </a>
        </div>
      ) : null}

      <button
        type='submit'
        className='inline-block px-7 py-3 mb-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full'
        data-mdb-ripple='true'
        data-mdb-ripple-color='light'
      >
        {submitButton}
      </button>

      <span>
        {spanText}
        <Link href={redirectLink.link}>
          <a className='text-blue-500 hover:text-blue-700'>{redirectLink.label}</a>
        </Link>
      </span>
    </form>
  );
};
