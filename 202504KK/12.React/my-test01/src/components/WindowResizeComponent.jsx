import { useEffect } from "react";

// useEffect イベントリスナーの登録とクリーンナップ
export default function WindowResizeComponent() {
  useEffect(() => {
    const handleResize = () => {
      console.log(`ウィンドウ幅サイズ: ${window.innerWidth}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // クリーンナップ
    };
  }, []); // 初回のみ登録

  return <div>ウィンドウ幅を変えてサイズを確認してください</div>;
}
