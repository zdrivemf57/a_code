import BookTable from "./components/BookTable";
import Card from "./components/Card";
import Profile from "./components/Profile";

export default function App () {
  const personalInfo = {
    name: "山田太郎",
    age: 25,
    job: "フォトグラファー",
  };

  const books = [
    { id: 1, title: "風の通り道", price: 3800, isAvailable: true },
    { id: 2, title: "ベネチア旅行記", price: 1200, isAvailable: false },
    { id: 3, title: "ヨーロッパの灯火", price: 4800, isAvailable: true }
  ];

  return (
    <div className="container mt-3">
      <h1 className="display-3 text-center">Taro's Site</h1>
      <hr />
      <Card>
        <Profile personalInfo={personalInfo} />
        <BookTable books={books} />
      </Card>
    </div>
  );
}