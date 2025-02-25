import { useEffect, useState } from "react";

export default function useFetchData(apiUrl) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('★useFetchData_data1', data);
    console.log('★useFetchData_isLoading1', isLoading);
    // Ajax 通信で、API からデータを取得する関数
    const getData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
        console.log('★useFetchData_data2', data);
        console.log('★useFetchData_isLoading2', isLoading);
      } catch (error) {
        console.log(error);
      }
    };

    getData(); // 上記関数の実行
  }, []);

  return { data, isLoading }; // 取得したデータとローディングの情報を返す
}
