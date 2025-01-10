import ButtonList from "./components/ButtonList";
import Count from "./components/Count";
import Form from "./components/Form";

export default function App () {
  return (
    <div className="container mt-4">
      <h1>Reactとイベント処理</h1>
      <hr />
      <ButtonList />
      <hr />
      <Form />
      <hr />
      <h5>独自追加</h5>
      <Count />
    </div>
  );
}
