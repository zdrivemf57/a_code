import axios from "axios";

const vocabApi = axios.create({
  baseURL: "http://localhost:8080/api/vocabs",
  headers: { "Content-Type": "application/json" }
});

// 全単語データの取得
export async function getVocabs() {
  try {
    const res = await vocabApi.get("");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// IDに基づき、単語データを1件取得する
export async function getVocabById(id) {
  try {
    const res = await vocabApi.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// 単語の種類に基づく単語リストの取得
export async function getVocabsByType(typeId) {
  try {
    const res = await vocabApi.get(`/type/${typeId}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// 単語の種類リストの取得
export async function getVocabTypes() {
  try {
    const res = await vocabApi.get("/types");
    return res.data;
  } catch (error) {
    return error;
  }
}

// 単語データの追加
export async function addVocab(vocab) {
  try {
    const res = await vocabApi.post("", vocab);
    return res.data;
  } catch (error) {
    return error;
  }
}

// 単語データの編集
export async function updateVocab(vocab) {
  try {
    const res = await vocabApi.put("", vocab);
    return res.data;
  } catch (error) {
    return error;
  }
}

// IDに基づき、単語データを1件削除する
export async function deleteVocab(id) {
  try {
    const res = await vocabApi.delete(`/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
}
