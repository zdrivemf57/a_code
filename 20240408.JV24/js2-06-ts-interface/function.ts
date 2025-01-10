// 型注釈のためのインターフェース
interface Item {
  name: string;
  price: number;
}

// 引数としてItem型を受け取る関数
// 引数にはname, priceプロパティが必要
function showInfo(item: Item) {
  console.log(`${item.name} (${item.price}円)`);
}

const obj1 = { name: "りんご", price: 100 };
const obj2 = { name: "みかん", price: 200, place: "和歌山" };

// 問題なし
showInfo(obj1);

// obj2には、余計なplaceプロパティがあるが、エラーにならない
showInfo(obj2);

// この使い方だとエラーになる
// showInfo({ name: "みかん", price: 200, place: "和歌山" });
