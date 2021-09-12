export const fetchStoreApi = async (id = "") => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
};
