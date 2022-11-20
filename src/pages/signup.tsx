import { NextPage } from 'next';
import { AuthForm } from '../components/auth/AuthForm';

const Signup: NextPage = () => {
  return (
    <>
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <AuthForm route="signup" />
        </div>
      </div>
    </>
  );
};

export default Signup;
