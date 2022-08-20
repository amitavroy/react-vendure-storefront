import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { AddressCard } from "../../../../components/Common/AddressCard";
import { AddAddressForm } from "../../../../components/Forms/AddAddressForm";
import Layout from "../../../../components/Layout";
import { IAddress } from "../../../../contracts/common/address.type";
import { userAddressQuery } from "../../../../queries/common/get-user-address.query";
import { addOrderAddressMutation } from "../../../../queries/mutations/add-address-to-order.mutation";
import { addOrderBillingAddressMutation } from "../../../../queries/mutations/add-billing-address-to-order.mutation";
import { removeCustomerAddressMutation } from "../../../../queries/mutations/remove-user-address.mutation";

const SelectAddressPage = () => {
  const router = useRouter();
  const [address, setAddress] = useState<Array<IAddress>>([]);
  const { data, refetch: refetchAddress } = useQuery(userAddressQuery);
  const [removeCustomerAddress] = useMutation(removeCustomerAddressMutation);
  const [addOrderAddress] = useMutation(addOrderAddressMutation);
  const [addBillingAddress] = useMutation(addOrderBillingAddressMutation);

  useEffect(() => {
    setAddress(data?.activeCustomer.addresses);
  }, [data]);

  const newAddressAdded = (newAddress: any) => {
    refetchAddress();
  };

  const selectAddress = async (address: IAddress) => {
    const {
      fullName,
      streetLine1,
      streetLine2,
      city,
      province,
      postalCode,
      country,
      phoneNumber,
    } = address;
    const addressInput = {
      fullName,
      streetLine1,
      streetLine2,
      city,
      province,
      postalCode,
      countryCode: country.code,
      phoneNumber,
    };
    await addOrderAddress({ variables: addressInput });
    await addBillingAddress({ variables: addressInput });
    router.push("/user/my-cart/payment-method");
  };
  const removeAddress = (id: number) => {
    removeCustomerAddress({ variables: { id } });
    refetchAddress();
  };

  return (
    <Layout pageTitle="Select your shipping address">
      <div className="mb-14">Add a shipping address or select one</div>
      <div className="grid grid-cols-3 gap-4 mb-10">
        {address &&
          address.length > 0 &&
          address.map((address, key) => {
            return (
              <AddressCard
                key={key}
                address={address}
                selectAddress={selectAddress}
                removeAddress={removeAddress}
              />
            );
          })}
      </div>
      <div className="flex justify-center mx-auto mb-20">
        <div className="w-1/2">
          <AddAddressForm newAddressAdded={newAddressAdded} />
        </div>
      </div>
    </Layout>
  );
};

export default SelectAddressPage;
