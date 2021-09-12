import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating:
// count: 120
// rate: 3.9
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
//ㄷㄷ;;;;
const ProductList = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => (
        <Link
          key={product.id}
          as={`/product/${product.id}`}
          href="/product/[id]"
        >
          <a>
            <ProductWrapper key={product.id}>
              <span>{product.title}</span>
              {/* <img src={product.image} alt="product image" /> */}
              <Image
                layout="fixed"
                width={50}
                height={50}
                src={product.image}
                alt="product image"
              />
            </ProductWrapper>
          </a>
        </Link>
      ))}
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 90%;
  margin: 0 auto;
`;

const ProductWrapper = styled.div`
  display: flex;
  padding: 15px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.94);
  box-shadow: 0px 1px 5px -2px rgba(0, 0, 0, 0.94);
  transition: all 0.2s;

  &:hover {
    width: calc(100% + 10px);
    height: calc(100% + 10px);
  }
`;
