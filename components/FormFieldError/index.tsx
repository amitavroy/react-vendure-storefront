import { FormikErrors, FormikTouched, FormikValues } from "formik";
import React from "react";

interface Props {
  name: string;
  errors: FormikErrors<FormikValues>;
  touched: FormikTouched<FormikValues>;
}

export const FormFieldError: React.FC<Props> = ({ name, errors, touched }) => {
  return (
    <>
      {errors[name] && touched && (
        <div className="text-red-500 text-sm">{errors[name]}</div>
      )}
    </>
  );
};
