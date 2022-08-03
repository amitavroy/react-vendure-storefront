import React, { FC } from "react";
import { Asset as IAsset } from "../../contracts/common/asset.type";
import Asset from "../Asset";
import { ProductAttribute } from "./ProductAttribute";

export interface Props {
  product: IProductDetail;
  addedToCart: (id: string, qty: number) => void;
}

export interface IProductDetail {
  id: string;
  title: string;
  price: string;
  featuredImage: IAsset;
  description: string;
  subTitle?: string;
  stars?: number;
  productThumbUrls?: Array<string>;
  attributes?: Array<IProductAttr>;
}

export interface IProductAttr {
  key: string;
  values: Array<string>;
}

export const ProductView: FC<Props> = ({ product, addedToCart }) => {
  const { title, featuredImage, price, id } = product;
  return (
    <section>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <div className="aspect-w-1 aspect-h-1">
              <Asset asset={featuredImage} classes="object-cover rounded-xl" />
            </div>

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              {product.productThumbUrls &&
                product.productThumbUrls.length > 0 &&
                product.productThumbUrls.map((src, index) => (
                  <div className="aspect-w-1 aspect-h-1" key={index}>
                    <img
                      alt={product.title}
                      className="object-cover rounded-xl"
                      src={src}
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600">
              {" "}
              Pre Order{" "}
            </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{product.title}</h1>

                {product.subTitle && (
                  <p className="mt-0.5 text-sm">{product.subTitle}</p>
                )}

                <div className="flex mt-2 -ml-0.5">{renderStars(product)}</div>
              </div>

              <p className="text-lg font-bold">${price}</p>
            </div>

            <details className="relative mt-4 group">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>{product.description}</p>
                  </div>

                  <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div className="pb-6 prose max-w-none">
                <p>{product.description}</p>
                <p>{product.description}</p>
              </div>
            </details>

            <div className="mt-8">
              {product.attributes &&
                product.attributes.length > 0 &&
                product.attributes.map((attribute, index) => (
                  <ProductAttribute attribute={attribute} key={index} />
                ))}

              <div className="flex mt-8">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners"
                  />
                </div>

                <button
                  type="submit"
                  className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                  onClick={() => addedToCart(id, 1)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderStars = (product: IProductDetail) => {
  const countStars = product.stars || 0;
  const starMarkup = [];
  for (let i = 0; i < 5; i++) {
    starMarkup.push(
      <svg
        className={`w-5 h-5 ${
          i < countStars ? "text-yellow-400" : "text-gray-400"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return starMarkup;
};
