import * as React from "react";
import { useForm } from "react-hook-form";

type FormProps = {
  title: string;
  validationSchema: any;
  onSubmit: (data: any) => {};
};

export const Form: React.FC<FormProps> = ({ title, validationSchema, onSubmit }) => {
  const { register, control, handleSubmit, reset, formState, watch } = useForm();

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
};
