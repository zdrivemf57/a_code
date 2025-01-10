interface Item {
  name: string;
  price: number;
}

// 引数としてItem型を受け取る関数: 引数にはname, priceプロパティが必要
function showInfo(item: Item) {
  console.log(`${item.name} (${item.price}円)`);
}

// 余計なplaceプロパティがあるが、エラーにならない
const obj = { name: "みかん", price: 200, place: "和歌山" };
showInfo(obj);

// この記述方法の場合はコンパイルエラーになる
// showInfo({ name: "みかん", price: 200, place: "和歌山" };);
