import { IAddress } from "./common/address.type";
import { ProductVariant } from "./products.type";

export interface IActiveOrder {
  activeOrder: ICart | null;
}

export interface ICart {
  id: number;
  code: string;
  state: string;
  lines: Array<ICartLine>;
  billingAddress: IAddress;
  shippingAddress: IAddress;
  discounts: any;
  total: number;
  totalWithTax: number;
}

export interface ICartLine {
  id: number;
  linePrice: number;
  unitPrice: number;
  linePriceWithTax: number;
  quantity: number;
  productVariant: ProductVariant;
}
