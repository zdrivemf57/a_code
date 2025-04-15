import { useState, useEffect } from "react";
import axios from "axios";

// Reactコンポーネント: APIからデータを取得して表示する
// 1. useEffectを使ってaxiosでAPIからデータを取得
// 2. ローディング中はスピナーを表示
// 3. データをリストとして50件ずつページネーション表示

export default function ApiDataComponent() {
  const [data, setData] = useState([]); // APIから取得したデータを格納するステート
  const [loading, setLoading] = useState(true); // ローディング状態を管理するステート
  const [page, setPage] = useState(1); // 現在のページ番号を管理するステート
  const itemsPerPage = 10; // 1ページあたりのアイテム数

  // APIからデータを取得する関数
  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  // コンポーネントがマウントされたときにAPIからデータを取得
  useEffect(() => {
    fetchData();
  }, []);

  // ページネーションのためのデータを計算
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // ページネーションのためのページ番号を変更する関数
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2>API Data</h2>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {currentItems.map((item) => (
              <li key={item.id} className="list-group-item">
                {item.title}
              </li>
            ))}
          </ul>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              {[...Array(Math.ceil(data.length / itemsPerPage)).keys()].map((number) => (
                <li key={number + 1} className={`page-item ${page === number + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => paginate(number + 1)}>
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}