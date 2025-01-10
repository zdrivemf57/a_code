import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import SumAndAverage from "./components/SumAndAverage";
import UserInfo from "./components/UserInfo";

export default function App () {
  return (
    <div className="container mt-4">
      <h1>練習12-1</h1>
      <hr />
      <Counter />
      <hr />
      <ItemList />
      <hr />
      <UserInfo />
      <hr />
      <h1 className="mt-5">練習12-2</h1>
      <hr />
      <SumAndAverage />
    </div>
  );
}
