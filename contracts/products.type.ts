import { Asset } from "./common/asset.type";

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  featuredAsset: Asset;
  variants: Array<ProductVariant>;
  facetValues: Array<IFacetValues>;
}

export interface ProductVariant {
  sku: string;
  name: string;
  productId: number;
  price: number;
  id: number;
  product: ProductItem;
}

export interface IFacetValues {
  id: string;
  code: string;
  name: string;
  facet: { name: string };
}
