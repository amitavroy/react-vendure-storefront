import { IProductDetail } from "../../components/ProductView";
import { ProductItem } from "../../contracts/products.type";
import { getRandomNumber } from "../utils";

export const productDetail = (data: ProductItem) => {
  const { name, featuredAsset, variants, description } = data;
  const newProduct: IProductDetail = {
    id: variants[0].id.toString(),
    title: name,
    price: variants[0].price.toString(),
    featuredImage: featuredAsset,
    description,
    stars: getRandomNumber(1, 5),
    variants,
  };
  return newProduct;
};
