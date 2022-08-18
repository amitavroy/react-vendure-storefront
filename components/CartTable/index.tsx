import React from "react";
import { IActiveOrder } from "../../contracts/cart.type";
import { numberToCurrency } from "../../services/utils";
import Asset from "../Asset";

interface Props {
  activeOrder: IActiveOrder | null;
  removeItemFromOrder: (id: number) => void;
}

export const CartTable: React.FC<Props> = ({
  activeOrder,
  removeItemFromOrder,
}) => {
  return (
    <React.Fragment>
      {activeOrder !== null && (
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
    </React.Fragment>
  );
};
