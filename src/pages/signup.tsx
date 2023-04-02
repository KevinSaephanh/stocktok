import { NextPage } from 'next';
import { AuthForm } from '../components/auth/AuthForm';

const Signup: NextPage = () => {
  return (
    <>
      <div className='container px-6 py-12 h-full'>
        <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
          <AuthForm route='signup' />
        </div>
      </div>
    </>
  );
};

export default Signup;
