import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next";
import { ProductItem } from "../../contracts/products.type";
import { VendureService } from "../../services/vendure.service";

interface Props {
  products: Array<ProductItem>;
}

const ProductsPage: React.FC<Props> = ({ products }) => {
  return (
    <div>
      {products.length > 0 &&
        products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </div>
  );
};

export default ProductsPage;

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const gqService = new VendureService();
  const { data } = await gqService.fetchProducts();
  return {
    props: {
      products: data.products.items,
    },
  };
};
