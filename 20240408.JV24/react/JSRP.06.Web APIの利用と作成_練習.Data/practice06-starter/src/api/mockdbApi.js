import axios from "axios";

const mockdbApi = axios.create({
  baseURL: "http://localhost:8081/products",
  headers: { "Content-Type": "application/json" }
});

// 全データの取得
export async function getProducts() {
  try {
    const res = await mockdbApi.get("");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// データの追加
export async function addProduct(product) {
  try {
    const res = await mockdbApi.post("", product);
    return res.data;
  } catch (error) {
    return error;
  }
}

// IDに基づき、データを1件削除する
export async function deleteProduct(id) {
  try {
    const res = await mockdbApi.delete(`/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
