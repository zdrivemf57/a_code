// 文法色々
export default function GrammarComponent() {
  /*const elm1 = <h1>Hello</h1><p>こんにちは</p>;*/
const elm2 = <div><h1>Hello</h1><p>こんにちは</p></div>;
const elm3 = <><h1>Hello</h1><p>こんにちは</p></>; 
const elm4 = <><div>
  <h1>Hello</h1>
  </div></>;

  return <div>{elm2}{elm3}{elm4}</div>;
}
