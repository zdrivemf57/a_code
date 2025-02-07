import customAxios from "./customAxios";

/**---------------------------------------------------------- 
 * B01 を利用
 * ページ番号を送り、そのページに該当する備品リストを取得する関数
 ------------------------------------------------------------*/
export async function getItems(page) {
  const res = await customAxios.get(`/items?page=${page}`);
  return res.data;
}

/**------------------------------------ 
 * B02 を利用
 * ID に基づき、備品の詳細情報を取得する関数
 ---------------------------------------*/
export async function getItemById(itemId) {
  const res = await customAxios.get(`/items/${itemId}`);
  return res.data;
}

/**----------------------------- 
 * B05 を利用
 * ID に基づき、備品を削除する関数
 -------------------------------*/
export async function deleteItemById(itemId) {
  const res = await customAxios.delete(`/items/${itemId}`);
  return res.data;
}

/**------------------------------------------------------------------ 
 * B03, B04 を利用
 * 備品情報を保存する関数
 * 備品 ID が存在している場合は更新、そうでない場合は新規登録
 -------------------------------------------------------------------*/
export async function saveItem(item) {
  // 備品 ID の有無でリクエストメソッドを選択
  const method = item?.id ? "put" : "post";

  // 選択したリクエストメソッドで備品データを送信
  const res = await customAxios({
    url: "/items",
    data: item,
    method
  });
  
  return res.data;
}
