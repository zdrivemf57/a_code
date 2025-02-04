import axios from "axios";

const mockdbApi = axios.create({
  baseURL: "http://localhost:8081/products",
  headers: { "Content-Type": "application/json" }
});

// 全データの取得
export async function getProducts() {
  const res = await mockdbApi.get("");
  return res.data;
}

// データの追加
export async function addProduct(product) {
  await mockdbApi.post("", product);
}

// ID に基づき、データを 1 件削除する
export async function deleteProduct(id) {
  await mockdbApi.delete(`/${id}`);
}
