import Child from "./Child";

export default function Parent() {
  const getDataFromChild = data => {
    console.log(data); // 親で、子から渡された文字列を表示できる
  };

  return (
    <div>
      <h1>Parent</h1>
      <Child funcToChild={getDataFromChild} />
    </div>
  );
}