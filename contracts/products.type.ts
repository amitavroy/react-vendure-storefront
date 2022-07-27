import { Asset } from "./common/asset.type";

export interface ProductItem {
  id: number;
  name: string;
  slug: string;
  description: string;
  featuredAsset: Asset;
  variants: Array<ProductVariant>;
}

export interface ProductVariant {
  sku: string;
  name: string;
  productId: number;
  price: number;
}
