import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { AddressCard } from "../../../components/Common/AddressCard";

import { AddAddressForm } from "../../../components/Forms/AddAddressForm";
import Layout from "../../../components/Layout";
import { IAddress } from "../../../contracts/common/address.type";
import { userAddressQuery } from "../../../queries/common/get-user-address.query";

const SelectAddressPage = () => {
  const [address, setAddress] = useState<Array<IAddress>>([]);
  const { data, loading, error } = useQuery(userAddressQuery);
  useEffect(() => {
    setAddress(data?.activeCustomer.addresses);
  }, [data]);
  return (
    <Layout pageTitle="Select your shipping address">
      <div className="mb-14">Add a shipping address or select one</div>
      <div className="flex justify-start gap-4 mb-10">
        {address &&
          address.length > 0 &&
          address.map((address, key) => {
            return <AddressCard key={key} address={address} />;
          })}
      </div>
      <div className="flex justify-center mx-auto mb-20">
        <div className="w-1/2">
          <AddAddressForm />
        </div>
      </div>
    </Layout>
  );
};

export default SelectAddressPage;
