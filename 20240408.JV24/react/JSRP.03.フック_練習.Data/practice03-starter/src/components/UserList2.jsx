import User from "./User";
import LoadingMotion from "./LoadingMotion";
import { useEffect, useState } from "react";

export default function UserList2 () {
  const url = "https://randomuser.me/api/?results=2";
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Ajax通信で、APIからデータを取得する関数
  const getData = async () => {
    try {
      const res = await fetch(url);
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

  if (isLoading) {
    return <LoadingMotion marginTop="80px" marginBottom="80px" />;
  }

  return (
    <div className="row">
      <p>useEffectを直接</p>
      {data.results.map(user => (
        <div key={user.login.uuid} className="col col-md-6 col-xl-4 mb-3">
          <User user={user} />
        </div>
      ))}
    </div>
  );
}
