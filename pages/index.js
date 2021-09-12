import Header from "../components/Header";
import { useEffect, useState } from "react";
import { fetchStoreApi } from "../pages/api/store";
import ProductList from "../components/ProductList";

export default function Home({ res: products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getStoreData = async () => {
  //     const res = await fetchStoreApi();
  //     setProducts(res);
  //   };
  //   getStoreData();
  // }, []);

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchStoreApi();
  return {
    props: {
      res,
    },
  };
}

// Home.getInitialProps = async () => {
//   const res = await fetchStoreApi();
//   return { res };
// };
