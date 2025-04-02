import { useEffect } from "react";

/**
 * useEffect内で、Web APIからデータを取得し、
 * 取得したデータをステートにセットするカスタムフック
 *
 * 第１引数: Web APIからデータを取得するための非同期関数
 * 第２引数: ステートにデータをセットするための関数
 * 第３引数: useStateの第２引数に渡す配列
 */
export default function useGetAndSetData(asyncGetData, setData, dependencies) {
  useEffect(() => {
    asyncGetData().then((data) => setData(data));
  }, dependencies);
}
