import { useQuery } from "@apollo/client";
import { useState } from "react";
import Layout from "../../../../components/Layout";
import { availablePaymentMethodsQuery } from "../../../../queries/common/available-payment.query";

interface IData {
  eligiblePaymentMethods: Array<{
    id: number;
    name: string;
    code: string;
    description: string;
    isEligible: boolean;
  }>;
}

interface IOrderStages {
  selectedAddress: boolean;
  selectedPaymentMethod: boolean;
}

const PaymentMethod = () => {
  const { data, loading, error } = useQuery<IData>(
    availablePaymentMethodsQuery
  );
  const [stages, setStages] = useState<IOrderStages>({
    selectedAddress: false,
    selectedPaymentMethod: false,
  });

  return (
    <Layout pageTitle="Select payment method">
      {!loading && !error && (
        <div>
          <p>Select payment method from the below list:</p>
          <ul>
            {data?.eligiblePaymentMethods.map((method) => {
              return (
                <li key={method.id}>
                  <h2 className="bold text-2xl cursor-pointer">
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
