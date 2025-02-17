import { useEffect, useState } from "react";
// useEffect 初回マウント時にデータ取得
export default function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // 初回のみ実行

  return <div>{data ? data.title : "Loading..."}</div>;
}
