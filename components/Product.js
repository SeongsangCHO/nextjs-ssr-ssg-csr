import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { useRouter } from "next/router";
import { fetchStoreApi } from "../pages/api/store";
import styled from "styled-components";
import Image from "next/image";

const Product = ({ product }) => {
  // const [product, setProduct] = useState({});
  console.log("???모야", product);
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

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const { params } = context;
//   console.log(params, id, "id");
//   const product = await fetchStoreApi(params.id);
//   console.log("product", product);
//   return {
//     props: { product }, // will be passed to the page component as props
//   };
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
