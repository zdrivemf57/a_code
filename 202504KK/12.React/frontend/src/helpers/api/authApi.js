import customAxios from "./customAxios";

/**-------------------------------------
 * A01を利用
 * ログインIDとパスワードを送信する関数 
 ----------------------------------------*/
export async function sendLoginIdAndPass({ loginId, loginPass }) {
  const res = await customAxios.post("/auth/login", { loginId, loginPass });
  return res.data;
}

/**--------------------------------------------------------
 * A02を利用
 * サーバー側でセッションを破棄するためのリクエストを送信する関数
 -----------------------------------------------------------*/
export async function sendLogoutRequest() {
  const res = await customAxios.get("/auth/logout");
  return res.data;
}

/**--------------------------------------------------------
 * A03を利用
 * トークンをサーバーに送信し、その有効性を確認する関数
 -----------------------------------------------------------*/
export async function hasValidToken() {
  const res = await customAxios.get("/auth/check-token");
  return res.data;
}
