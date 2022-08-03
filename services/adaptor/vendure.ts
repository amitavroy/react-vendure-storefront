import { IProductDetail } from "../../components/ProductView";
import { ProductItem } from "../../contracts/products.type";
import { getRandomNumber } from "../utils";

export const productDetail = (data: ProductItem) => {
  const { name, featuredAsset, variants, description, id } = data;
  const newProduct: IProductDetail = {
    id,
    title: name,
    price: variants[0].price.toString(),
    featuredImage: featuredAsset,
    description,
    stars: getRandomNumber(1, 5),
  };
  return newProduct;
};
