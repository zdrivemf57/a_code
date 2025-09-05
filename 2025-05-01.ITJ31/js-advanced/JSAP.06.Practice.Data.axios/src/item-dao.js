import axios from "axios";

const API_URL = "http://localhost:3000/items";

async function getItems() {
  const res = await axios.get(API_URL);
  return res.data;
}

async function addItem(item) {
  const res = await axios.post(API_URL, item);
}

export { getItems, addItem };
