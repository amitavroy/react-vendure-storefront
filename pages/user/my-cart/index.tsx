import { useMutation, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Asset from "../../../components/Asset";

import Layout from "../../../components/Layout";
import { IActiveOrder } from "../../../contracts/cart.type";
import { removeItemFromOrderMutation } from "../../../queries/mutations/remove-from-cart.mutation";
import { myCartQuery } from "../../../queries/my-cart.query";
import { numberToCurrency } from "../../../services/utils";

const MyCartPage: NextPage = () => {
  const [activeOrder, setActiveOrder] = useState<IActiveOrder | null>(null);
  const { data, loading, error, refetch } = useQuery<IActiveOrder>(myCartQuery);
  const [remove, { error: rError, loading: rLoading }] = useMutation(
    removeItemFromOrderMutation
  );
  const router = useRouter();

  useEffect(() => {
    data?.activeOrder && setActiveOrder(data);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [router.events]);

  const removeItemFromOrder = (id: number) => {
    remove({ variables: { id } });
    refetch();
  };
  return (
    <Layout pageTitle="My cart">
      {!loading && !error && (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Unit price
              </th>
              <th scope="col" className="py-3 px-6">
                Qty
              </th>
              <th scope="col" className="py-3 px-6">
                Total (with tax)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white border-b">
            {activeOrder &&
              activeOrder != null &&
              activeOrder?.activeOrder?.lines.map((line) => {
                return (
                  <tr key={line.id}>
                    <td className="py-4 px-6">
                      <div className="flex">
                        <div className="w-16 h-16 mr-4">
                          <Asset
                            asset={line.productVariant.product.featuredAsset}
                          />
                        </div>
                        <div>
                          {line.productVariant.name} <br />
                          <small
                            className="cursor-pointer"
                            onClick={() => removeItemFromOrder(line.id)}
                          >
                            Remove
                          </small>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      {numberToCurrency(line.unitPrice)}
                    </td>
                    <td className="py-4 px-6">{line.quantity}</td>
                    <td className="py-4 px-6">
                      {numberToCurrency(line.productVariant.price)}
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td colSpan={3} align="right">
                {numberToCurrency(activeOrder?.activeOrder?.total || 0)}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Total with taxes</strong>
              </td>
              <td colSpan={3} align="right">
                {numberToCurrency(activeOrder?.activeOrder?.totalWithTax || 0)}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </Layout>
  );
};

export default MyCartPage;
