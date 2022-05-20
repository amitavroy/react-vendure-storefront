import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { ProductItem } from "../../contracts/products.type";
import { VendureService } from "../../services/vendure.service";

interface Props {
  products: Array<ProductItem>;
}

const ProductsPage: React.FC<Props> = ({ products }) => {
  return (
    <div className="antialiased">
      <Layout pageTitle="Product list">
        <div className="flex">
          <div className="flex-none w-60 pr-4 pt-6">Sidebar</div>
          <div className="flex-initial">
            <div className="grid grid-cols-4 gap-2">
              {products.length > 0 &&
                products.map((product) => {
                  return <ProductCard product={product} />;
                })}
            </div>
          </div>
        </div>
      </Layout>
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
