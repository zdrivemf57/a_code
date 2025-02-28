import User from "./User";
import useFetchData from "../hooks/useFetchData";
import LoadingMotion from "./LoadingMotion";
import { useEffect, useState } from "react";

export default function UserList() {
  const url = "https://randomuser.me/api/?results=100";

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  console.log('★UserList_isLoading1', isLoading);
  console.log('★UserList_data1', data);

  useEffect(() => {
    console.log('★useFetchData_isLoading1', isLoading);
    console.log('★useFetchData_data1', data);
    // Ajax 通信で、API からデータを取得する関数
    // 無名関数を即時実行関数（IIFE: Immediately Invoked Function Expression）として記述
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsLoading(false);
        console.log('★useFetchData_isLoading2', isLoading);
        console.log('★useFetchData_data2', data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Reactの初回レンダリング → useEffect の実行 → ステートが変更されたら再レンダリングの流れ！
  // なので、下のコンソール出力は、useEffect内のコンソール出力より先に実行される。
  console.log('★UserList_isLoading2', isLoading);
  console.log('★UserList_data2', data);

  if (isLoading) {
    return <LoadingMotion marginTop="80px" marginBottom="80px" />;
  }

  return (
    <div className="row">
      {data.results.map((user) => (
        <div key={user.login.uuid} className="col col-md-6 col-xl-4 mb-3">
          <User user={user} />
        </div>
      ))}
    </div>
  );
}
