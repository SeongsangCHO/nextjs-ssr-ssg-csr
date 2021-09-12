import Header from "../components/Header";
import { fetchStoreApi } from "../pages/api/store";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getStoreData = async () => {
  //     const res = await fetchStoreApi();
  //     setProducts(res);
  //   };
  //   getStoreData();
  // }, []);
  console.log(products);

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetchStoreApi();

  return {
    props: { products }, // will be passed to the page component as props
  };
}

// Home.getInitialProps = async () => {
//   const res = await fetchStoreApi();
//   return { res };
// };
