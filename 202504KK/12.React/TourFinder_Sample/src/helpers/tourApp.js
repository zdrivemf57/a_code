import axios from "axios";

const baseUrl = "http://localhost:8080/api";

/**
 * ツアー情報(リスト)の取得
 * 引数は {guideId: "1", keyword: "東京の下町"} のようなオブジェクトを想定
 */
export async function getTours(params) {
  const { data } = await axios.get(`${baseUrl}/tours`, { params });
  return data;
}

/**
 * ツアー情報(個別)の取得
 * 引数はツアーのID番号を想定
 */
export async function getTourDetail(id) {
  if (!id) {
    return null;
  }

  const { data } = await axios.get(`${baseUrl}/tours/${id}`);
  return data;
}

/**
 * ツアーガイド(リスト)の取得
 */
export async function getTourGuides() {
  const { data } = await axios.get(`${baseUrl}/tour-guides`);
  return data;
}
