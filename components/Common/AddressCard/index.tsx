import React from "react";
import { IAddress } from "../../../contracts/common/address.type";

interface Props {
  address: IAddress;
  selectAddress: (address: IAddress) => void;
  removeAddress: (id: number) => void;
}

export const AddressCard: React.FC<Props> = ({
  address,
  selectAddress,
  removeAddress,
}) => {
  return (
    <div className="border p-4 rounded">
      <div className="mb-4">
        <strong className="bold">{address.fullName}</strong>
        <br />
        {`${address.streetLine1} ${address.streetLine2}`}
        <br />
        Country: {address.country.name}
        <br />
        Phone: {address.phoneNumber}
      </div>
      <div className="flex justify-between border-t pt-4">
        <small
          className="cursor-pointer"
          onClick={() => selectAddress(address)}
        >
          Select
        </small>
        <small
          className="cursor-pointer"
          onClick={() => removeAddress(address.id)}
        >
          Remove
        </small>
      </div>
    </div>
  );
};
