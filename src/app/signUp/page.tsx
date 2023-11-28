import { SignUpForm } from './form';

export default function Page() {
  return (
    <>
      <div className="px-6 py-12 h-full">
        <div className="flex flex-col justify-center items-center h-full g-6">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}
