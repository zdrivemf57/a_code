import { useEffect, useState } from "react";

export default function useFetchData (apiUrl) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Ajax通信で、APIからデータを取得する関数
  const getData = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(); // 上記関数の実行
  }, []);

  return { data, isLoading }; // 取得したデータとローディングの情報を返す
}
