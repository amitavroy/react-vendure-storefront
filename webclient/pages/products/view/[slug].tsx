import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../../components/Layout";
import { ProductItem } from "../../../contracts/products.type";
import { VendureService } from "../../../services/vendure.service";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  product: ProductItem;
}

const ProductDetailsPage: NextPage<Props> = ({ product }) => {
  return (
    <Layout pageTitle={product.name}>
      <h1>{product.name}</h1>
    </Layout>
  );
};

export default ProductDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const vendureService = new VendureService();
  const resp = await vendureService.fetchProductSlugs();
  const paths = resp.data.products.items.map((product: any) => ({
    params: { id: product.id, slug: product.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const vendureService = new VendureService();
  const response = await vendureService.fetchProductBySlugs(slug);
  return {
    props: {
      slug: context.params?.slug,
      product: response.data.product,
    },
  };
};
