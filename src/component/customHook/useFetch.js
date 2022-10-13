import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const no_of_entry = data.count;
    setProducts([...product, ...data.entries]);
    setLoading(false);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return {loading,product}
};
export default useFetch
