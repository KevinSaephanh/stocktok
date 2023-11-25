import { NextPage } from 'next';
import { SignInForm } from './form';

const SignIn: NextPage = () => {
  return (
    <>
      <div className="px-6 py-12 h-full">
        <div className="flex flex-col justify-center items-center h-full g-6">
          <SignInForm />
        </div>
      </div>
    </>
  );
};

export default SignIn;
