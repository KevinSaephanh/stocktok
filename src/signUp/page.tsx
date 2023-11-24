import { NextPage } from 'next';
import { SignUpForm } from './form';

const SignUp: NextPage = () => {
  return (
    <>
      <div className="px-6 py-12 h-full">
        <div className="flex flex-col justify-center items-center h-full g-6">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
