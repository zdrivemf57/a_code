import fs from "fs";
import path from "path";
import Item from "./item-class.mjs";

const filePath = path.join(process.cwd(), "data", "data.json");

function getData() {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export function showItems() {
  const { items }  = getData(); // { items }とすることでitemsは配列となる
  console.log(getData());
  console.log(items);
  items.map(item => new Item(item.name, item.price))
       .forEach(item => item.showInfo());
}

export function addItem({ name, price }) {
  const { items } = getData();
  // 末尾にアイテムを追加
  const newItems = [...items, { name, price }];
  fs.writeFileSync(filePath, JSON.stringify({ items: newItems }));
}