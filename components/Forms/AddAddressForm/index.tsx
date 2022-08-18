import { useMutation } from "@apollo/client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { IAddress } from "../../../contracts/common/address.type";

import { addAddressToCustomerMutation } from "../../../queries/mutations/address-to-customer.mutation";
import { FormFieldError } from "../../FormFieldError";

interface Props {
  newAddressAdded: (address: any) => void;
}

interface IValues {
  fullName: string;
  streetLine1: string;
  streetLine2: string;
  city: string;
  province: string;
  postalCode: string;
  countryCode: string;
  phoneNumber: string;
  defaultShippingAddress: boolean;
  defaultBillingAddress: boolean;
}

export const AddAddressForm: React.FC<Props> = ({ newAddressAdded }) => {
  const [addAddress, { data, loading, error }] = useMutation(
    addAddressToCustomerMutation
  );
  const initialFormValues: IValues = {
    fullName: "",
    streetLine1: "",
    streetLine2: "",
    city: "",
    province: "",
    postalCode: "",
    countryCode: "",
    phoneNumber: "",
    defaultShippingAddress: false,
    defaultBillingAddress: false,
  };
  const handleSubmit = async (
    values: IValues,
    { setSubmitting, resetForm }: FormikHelpers<IValues>
  ) => {
    setSubmitting(false);
    const {
      fullName,
      streetLine1,
      streetLine2,
      city,
      province,
      postalCode,
      countryCode,
      phoneNumber,
      defaultBillingAddress,
      defaultShippingAddress,
    } = values;
    const newAdd = await addAddress({
      variables: {
        fullName,
        streetLine1,
        streetLine2,
        city,
        province,
        postalCode,
        countryCode,
        phoneNumber,
      },
    });
    resetForm();
    newAddressAdded(newAdd.data?.createCustomerAddress);
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <label htmlFor="fullName" className="text-sm font-medium">
              Add name of the address
            </label>
            <div className="relative mt-1">
              <Field
                id="fullName"
                name="fullName"
                placeholder="Name of the address"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="fullName"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="streetLine1" className="text-sm font-medium">
              Street address 1
            </label>
            <div className="relative mt-1">
              <Field
                id="streetLine1"
                name="streetLine1"
                placeholder="Street address line 1"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="streetLine1"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="streetLine2" className="text-sm font-medium">
              Street address 2
            </label>
            <div className="relative mt-1">
              <Field
                id="streetLine2"
                name="streetLine2"
                placeholder="Street address line 1"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="streetLine2"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="text-sm font-medium">
              City
            </label>
            <div className="relative mt-1">
              <Field
                id="city"
                name="city"
                placeholder="City"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError name="city" errors={errors} touched={touched} />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="province" className="text-sm font-medium">
              Province
            </label>
            <div className="relative mt-1">
              <Field
                id="province"
                name="province"
                placeholder="province"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="province"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="postalCode" className="text-sm font-medium">
              Postal code
            </label>
            <div className="relative mt-1">
              <Field
                id="postalCode"
                name="postalCode"
                placeholder="postalCode"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="postalCode"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="countryCode" className="text-sm font-medium">
              Country code
            </label>
            <div className="relative mt-1">
              <Field
                id="countryCode"
                name="countryCode"
                placeholder="countryCode"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="countryCode"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone number
            </label>
            <div className="relative mt-1">
              <Field
                id="phoneNumber"
                name="phoneNumber"
                placeholder="phoneNumber"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
              />
              <FormFieldError
                name="phoneNumber"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 mt-4 text-sm font-medium text-white bg-indigo-600 rounded-lg"
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  );
};
