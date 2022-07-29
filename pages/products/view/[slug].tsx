import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../../components/Layout";
import { ProductView } from "../../../components/ProductView";
import { ProductItem } from "../../../contracts/products.type";
import { productDetail } from "../../../services/adaptor/vendure";
import { VendureService } from "../../../services/vendure.service";

interface IParams extends ParsedUrlQuery {
  slug: string;
}
interface Props {
  product: ProductItem;
}

const ProductDetailsPage: NextPage<Props> = ({ product }) => {
  console.log("first product", product.facetValues);
  // const facets: Array<Array<string>> = [];
  const facets: any = [];
  if (product.facetValues && product.facetValues.length > 0) {
    product.facetValues.forEach((values) => {
      // working
      if (!facets[values.facet.name]) {
        facets[values.facet.name] = new Array();
        facets[values.facet.name].push(values.name);
      } else {
        facets[values.facet.name].push(values.name);
      }

      // typical php
      // facets[values.facet.name][] = values.name;
    });
    console.log("facets", facets);
  }
  return (
    <Layout pageTitle={product.name}>
      <ProductView product={productDetail(product)} />
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
