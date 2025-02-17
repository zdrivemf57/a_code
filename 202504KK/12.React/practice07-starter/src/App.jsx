import { getProducts } from "./helpers/productsApi";
import ProductTable from "./components/ProductTable";
import ProductRegistationForm from "./components/ProductRegistrationForm";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts /*カンマを削除*/
  });

  let mainContents;
  if (isError) {
    mainContents = (
      <div className="alert alert-danger">データの取得に失敗しました</div>
    );
  } else if (isLoading) {
    mainContents = <p>...Loading</p>;
  } else if (products.length === 0) {
    mainContents = (
      <div className="alert alert-warning">データが存在しません</div>
    );
  } else {
    mainContents = <ProductTable products={products} />;
  }

  return (
    <div className="container">
      <h1 className="my-4 display-4">Office Products</h1>
      <hr />
      <ProductRegistationForm />
      {mainContents}
    </div>
  );
}
