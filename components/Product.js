import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { useRouter } from "next/router";
import { fetchStoreApi } from "../pages/api/store";
import styled from "styled-components";
import Image from "next/image";

const Product = ({ product }) => {
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   const getProductData = async () => {
  //     if (!id) return;
  //     const res = await fetchStoreApi(id);
  //     setProduct(res);
  //   };
  //   getProductData();
  // }, [id]);
  return (
    <Wrapper>
      {product?.image && (
        <Image
          src={product.image}
          layout="fixed"
          width={150}
          height={150}
          alt="product image"
        />
      )}
      <span>{product?.title}</span>
    </Wrapper>
  );
};

export default Product;

// export async function getStaticPaths() {
//   const products = await fetchStoreApi();

//   // Get the paths we want to pre-render based on posts
//   const paths = products.map((product) => ({
//     params: { id: product.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

// This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const product = await fetchStoreApi(params.id);

//   // Pass post data to the page via props
//   return { props: { product } };
// }

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  & span {
    margin-top: 15px;
  }
`;
