import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import Layout from "../../../../components/Layout";
import { activeOrderQuery } from "../../../../queries/common/active-order.query";
import { availablePaymentMethodsQuery } from "../../../../queries/common/available-payment.query";
import { eligibleShippingMethodsQuery } from "../../../../queries/common/shipping-methods.query";
import { addPaymentToOrderMutation } from "../../../../queries/mutations/add-payment-to-order.mutation";
import { changeOrderStateMutation } from "../../../../queries/mutations/change-order-state.mutation";
import { setOrderShippingMethod } from "../../../../queries/mutations/set-shipping-method.mutation";

interface IData {
  eligiblePaymentMethods: Array<{
    id: number;
    name: string;
    code: string;
    description: string;
    isEligible: boolean;
  }>;
}

interface IShippingData {
  eligibleShippingMethods: Array<{
    id: number;
    name: string;
    code: string;
    price: string;
    priceWithTax: string;
  }>;
}

const PaymentMethod = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<IData>(
    availablePaymentMethodsQuery
  );
  const {
    data: shippingData,
    loading: shippingLoading,
    error: shipError,
  } = useQuery<IShippingData>(eligibleShippingMethodsQuery);
  const [addPaymentMethod] = useMutation(addPaymentToOrderMutation);
  const [addShippingMethod] = useMutation(setOrderShippingMethod);
  const [changeOrderState] = useMutation(changeOrderStateMutation);
  const handleMethodSelection = (type: string, value: string) => {
    switch (type) {
      case "shipping":
        addShippingMethod({ variables: { id: value } });
        break;
      case "payment":
        addPaymentMethod({
          variables: { method: value, metaData: {} },
        });
        break;
      default:
        break;
    }
  };
  const makePayment = async (state: "ArrangingPayment" | "PaymentSettled") => {
    await changeOrderState({ variables: { state } });
    router.push("/user/my-cart/payment-method");
  };
  return (
    <Layout pageTitle="Select payment method">
      {!shippingLoading && !shipError && (
        <div>
          <p>Select shipping method from the below list:</p>
          <ul>
            {shippingData?.eligibleShippingMethods.map((method) => {
              return (
                <li key={method.id}>
                  <h2
                    className="bold text-2xl cursor-pointer"
                    onClick={() =>
                      handleMethodSelection("shipping", method.id.toString())
                    }
                  >
                    {method.name}
                  </h2>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="mt-10">
        <p>Click here to make payment for your order</p>
        <h2
          className="bold text-2xl cursor-pointer"
          onClick={() => makePayment("ArrangingPayment")}
        >
          Make payment
        </h2>
      </div>

      {!loading && !error && (
        <div className="mt-10">
          <p>Select payment method from the below list:</p>
          <ul>
            {data?.eligiblePaymentMethods.map((method) => {
              return (
                <li key={method.id}>
                  <h2
                    className="bold text-2xl cursor-pointer"
                    onClick={() =>
                      handleMethodSelection("payment", method.code)
                    }
                  >
                    {method.name}
                  </h2>
                  <small>{method.description}</small>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Layout>
  );
};

export default PaymentMethod;
