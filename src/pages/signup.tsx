import { NextPage } from 'next';
import { SignupForm } from '../components/auth/SignupForm';

const Signup: NextPage = () => {
  return (
    <>
      <div className='px-6 py-12 h-full'>
        <div className='flex flex-col justify-center items-center h-full g-6'>
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
