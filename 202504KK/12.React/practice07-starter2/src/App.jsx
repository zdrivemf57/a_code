import { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "./helpers/productsApi";
import ProductTable from "./components/ProductTable";
import ProductRegistationForm from "./components/ProductRegistrationForm";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getProducts();
        if (data.length === 0) {
          throw new Error("データが 0 件");
        }
        setProducts(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  let mainContents;
  if (isError) {
    mainContents = (
      <div className="alert alert-danger">データの取得に失敗しました</div>
    );
  } else if (isLoading) {
    mainContents = <p>...Loading</p>;
  } else {
    mainContents = <ProductTable products={products} setProducts={setProducts} />;
  }

  return (
    <div className="container">
      <h1 className="my-4 display-4">Office Products</h1>
      <hr />
      <ProductRegistationForm setProducts={setProducts} />
      {mainContents}
    </div>
  );
}
