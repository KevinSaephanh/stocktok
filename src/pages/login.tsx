import { NextPage } from 'next';
import { LoginForm } from '../components/auth/LoginForm';

const Login: NextPage = () => {
  return (
    <>
      <div className='px-6 py-12 h-full'>
        <div className='flex flex-col justify-center items-center h-full g-6'>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
