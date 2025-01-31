import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import SumAndAverage from "./components/SumAndAverage";
import UserInfo from "./components/UserInfo";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="container mt-4">
      <h1>練習03-1</h1>
      <hr />
      <Counter />
      <hr />
      <ItemList />
      <hr />
      <UserInfo />
      <hr />
      <h1 className="mt-5">練習 03-2</h1>
      <hr />
      <SumAndAverage />
      <hr />
      <h1 className="mt-5">練習 03-3</h1>
      <hr />
      <UserList />
    </div>
  );
}
