import React from 'react';

type InputFieldProps = {
  value: string;
  label?: string;
  labelStyles?: string;
  inputStyles?: string;
  name?: string;
  placeholder?: string;
  type: 'text' | 'email' | 'password';
} & Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
>;

export const InputField: React.FC<InputFieldProps> = ({
  value,
  label,
  labelStyles,
  inputStyles,
  name,
  placeholder,
  type,
  ...props
}) => {
  return (
    <>
      {label && (
        <label htmlFor='input-field' className={`themed-text pb-2 ${labelStyles}`}>
          {label}
        </label>
      )}
      <input
        className={`rounded p-2 mb-4 ${inputStyles}`}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};
