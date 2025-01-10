import readline from "readline";
import { showItems, addItem } from "./item-dao.mjs";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("アイテム名を入力してください: ", (answer) => {
  const newItem = { name: answer };
  reader.question("値段を入力してください: ", (answer) => {
    newItem.price = Number(answer);
    addItem(newItem);
    showItems();
    reader.close();
  });
});
