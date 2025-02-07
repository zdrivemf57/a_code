import customAxios from "./customAxios";

/**--------------------------------
 * B06を利用
 * 備品の保管場所リストを取得する関数
 -----------------------------------*/
export async function getLocations() {
  const res = await customAxios.get("/locations");
  return res.data;
}
