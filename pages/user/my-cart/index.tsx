import { useMutation, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { CartTable } from "../../../components/CartTable";
import { ButtonLink } from "../../../components/Common/ButtonLink";
import Layout from "../../../components/Layout";
import { IActiveOrder } from "../../../contracts/cart.type";
import { removeItemFromOrderMutation } from "../../../queries/mutations/remove-from-cart.mutation";
import { myCartQuery } from "../../../queries/my-cart.query";

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
        <div>
          <CartTable
            activeOrder={activeOrder}
            removeItemFromOrder={removeItemFromOrder}
          />
          {activeOrder && (
            <div className="mt-4 flex justify-end">
              <ButtonLink
                text="Proceed to checkout"
                href="/user/my-cart/set-address"
              />
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

export default MyCartPage;
