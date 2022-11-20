import { UseFormRegisterReturn } from "react-hook-form";

import { FieldWrapper, FieldWrapperPassThroughProps } from "./FieldWrapper";

// Credit: https://github.com/alan2207/bulletproof-react/blob/master/src/components/Form/TextareaField.tsx

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { label, className, registration, error } = props;
  return (
    <FieldWrapper label={label} error={error}>
      <textarea className="" {...registration} />
    </FieldWrapper>
  );
};
