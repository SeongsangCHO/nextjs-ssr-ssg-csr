import React from "react";
import { useRouter } from "next/router";
import Product from "../../components/Product";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Product id={id} />;
};

export default Id;
