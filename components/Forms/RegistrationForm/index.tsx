import { useMutation } from "@apollo/client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { userRegistrationMutation } from "../../../queries/mutations/user-registration.mutation";
import { FormFieldError } from "../../FormFieldError";
import { RegistrationSchema } from "./registration.schema";

interface Values {
  title: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
}

interface Props {
  onSuccess: () => void;
}

export const RegistrationForm: React.FC<Props> = ({ onSuccess }) => {
  const [register, { error }] = useMutation(userRegistrationMutation);
  const formInitValues: Values = {
    title: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  };

  const handleSubmit = async (
    values: Values,
    { setSubmitting, resetForm }: FormikHelpers<Values>
  ) => {
    setSubmitting(false);
    const { emailAddress, firstName, lastName, phoneNumber, password } = values;
    const resp = await register({
      variables: {
        email: emailAddress,
        firstName,
        lastName,
        phoneNumber,
        password,
      },
    });
    if (!resp.errors) {
      resetForm();
      onSuccess();
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl mb-4">
          Get started today
        </h1>

        <Formik
          initialValues={formInitValues}
          onSubmit={handleSubmit}
          validationSchema={RegistrationSchema}
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
        >
          {({ errors, touched }) => (
            <Form>
              <p className="text-lg font-medium mb-4">
                Sign in to your account
              </p>

              {/* Title */}
              <div>
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>

                <div className="relative mt-1">
                  <Field
                    id="title"
                    name="title"
                    placeholder="Enter your first name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  />
                  <FormFieldError
                    name="title"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>

              {/* First name */}
              <div>
                <label htmlFor="firstName" className="text-sm font-medium">
                  First name
                </label>

                <div className="relative mt-1">
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  />
                  <FormFieldError
                    name="firstName"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>

              {/* Last name */}
              <div>
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last name
                </label>

                <div className="relative mt-1">
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your first name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  />
                  <FormFieldError
                    name="lastName"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>

              {/* Phone number */}
              <div>
                <label htmlFor="phoneNumber" className="text-sm font-medium">
                  Phone number
                </label>

                <div className="relative mt-1">
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your first name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  />
                  <FormFieldError
                    name="phoneNumber"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="emailAddress" className="text-sm font-medium">
                  Email
                </label>

                <div className="relative mt-1">
                  <Field
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Enter email"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  />
                  <FormFieldError
                    name="emailAddress"
                    errors={errors}
                    touched={touched}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative mt-1">
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
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
                Sign up
              </button>

              <p className="text-sm text-center text-gray-500 mt-4">
                Have an account?
                <a className="underline" href="">
                  Sign in
                </a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
