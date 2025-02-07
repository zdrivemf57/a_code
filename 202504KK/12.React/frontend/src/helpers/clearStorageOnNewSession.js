import Cookies from "js-cookie";

// 再度ブラウザを開いた際にlocalStorageをクリアする関数
export default function clearStorageOnNewSession() {
  // クッキーが存在するか確認
  if (!Cookies.get("sessionActive")) {
    // クッキーが存在しない場合、localStorage をクリア
    localStorage.clear();

    // クッキーを設定して次回以降のクリアを防止
    Cookies.set("sessionActive", "true");
  }
}
