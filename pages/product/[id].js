import React from "react";
import Product from "../../components/Product";
import { fetchStoreApi } from "../api/store";

const Id = ({ product }) => {
  return <Product product={product} />;
};

export default Id;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const { params } = context;
  console.log(params, id, "id");
  const product = await fetchStoreApi(params.id);
  console.log("product", product);
  return {
    props: { product }, // will be passed to the page component as props
  };
}
