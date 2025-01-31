import { addItem } from "./item-dao.js";
import { appendTableRow } from "./item-table.js";

async function handleSubmit(event) {
  event.preventDefault();
  const itemName = document.getElementById("item-name");
  const itemPrice = document.getElementById("item-price");
  const item = { name: itemName.value, price: Number(itemPrice.value) };
  await addItem(item);
  appendTableRow(item);
  itemName.value = "";
  itemPrice.value = "0";
}

function createForm() {
  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "item-name");

  const inputPrice = document.createElement("input");
  inputPrice.setAttribute("type", "number");
  inputPrice.setAttribute("value", "0");
  inputPrice.setAttribute("id", "item-price");

  const button = document.createElement("input");
  button.setAttribute("type", "submit");
  button.setAttribute("value", "登録");
  
  const form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.append(inputName, inputPrice, button);
  return form;
}

export { createForm };
