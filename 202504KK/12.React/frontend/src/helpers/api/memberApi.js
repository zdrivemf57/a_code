import customAxios from "./customAxios";

/**--------------------------------
 * C01を利用
 * ログイン中の会員情報を取得
 -----------------------------------*/
export async function getMember() {
  const res = await customAxios.get("/member");
  return res.data;
}

/**--------------------------------
 * C02を利用
 * ログイン中の会員情報を更新
 -----------------------------------*/
export async function updateMember({ name, loginId, loginPass }) {
  const res = await customAxios.put("/member", {
    name,
    loginId,
    loginPass
  });

  return res.data;
}
