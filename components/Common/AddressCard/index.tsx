import React from "react";
import { IAddress } from "../../../contracts/common/address.type";

interface Props {
  address: IAddress;
}

export const AddressCard: React.FC<Props> = ({ address }) => {
  return (
    <div className="border p-4 rounded">
      <strong className="bold">{address.fullName}</strong>
      <br />
      {`${address.streetLine1} ${address.streetLine2}`}
      <br />
      Country: {address.country.name}
      <br />
      Phone: {address.phoneNumber}
    </div>
  );
};
