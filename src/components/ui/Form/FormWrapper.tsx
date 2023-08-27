import React from 'react';

type FormWrapperProps = {
  styles?: string;
  children: React.ReactNode;
  submitDisabled?: boolean;
  submitButtonText?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const FormWrapper: React.FC<FormWrapperProps> = ({
  styles,
  children,
  submitDisabled,
  submitButtonText = 'Submit',
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col justify-between ${styles}`}>
      {children}
      <button className='w-32 mx-auto mt-4' type='submit' disabled={submitDisabled}>
        {submitButtonText}
      </button>
    </form>
  );
};
