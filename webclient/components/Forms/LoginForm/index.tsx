import { useMutation } from "@apollo/client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";

import { userLoginMutation } from "../../../queries/mutations/user-login.mutation";
import { FormFieldError } from "../../FormFieldError";

interface Values {
  username: string;
  password: string;
}

interface Props {
  onSuccess: () => void;
}

export const LoginForm: React.FC<Props> = ({ onSuccess }) => {
  const [login, { error }] = useMutation(userLoginMutation);
  const formInitValues: Values = {
    username: "",
    password: "",
  };
  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    setSubmitting(false);
    const resp = await login({ variables: values });
    if (!resp.errors) {
      resetForm();
      onSuccess();
    }
  };
  return (
    <div>
      <Formik initialValues={formInitValues} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="username" className="text-sm font-medium">
                Enter your username
              </label>

              <div className="relative mt-1">
                <Field
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                />
                <FormFieldError
                  name="username"
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="text-sm font-medium">
                Enter your password
              </label>

              <div className="relative mt-1">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                />
                <FormFieldError
                  name="password"
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
