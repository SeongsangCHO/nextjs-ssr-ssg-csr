import React from "react";
import { useRouter } from "next/router";
import Product from "../../components/Product";
import { fetchStoreApi } from "../api/store";

const Id = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    console.log(router.isFallback);
    return <div>Loading...</div>;
  }

  return <Product product={product} id={id} />;
};

export default Id;

export async function getStaticPaths() {
  const products = await fetchStoreApi();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // if (params)
  console.log(params);
  if (params.id == 9999) {
    const product = await fetchStoreApi(1);
    return { props: { product } };
  }
  const product = await fetchStoreApi(params.id);
  if (!product) {
    return {
      notFound: true,
    };
  }
  // Pass post data to the page via props
  return { props: { product }, revalidate: 1 };
}
