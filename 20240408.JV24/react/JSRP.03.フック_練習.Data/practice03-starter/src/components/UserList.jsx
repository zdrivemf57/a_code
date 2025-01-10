import User from "./User";
import useFetchData from "../hooks/useFetchData";
import LoadingMotion from "./LoadingMotion";

export default function UserList () {
  const url = "https://randomuser.me/api/?results=100";
  const { data, isLoading } = useFetchData(url);

  if (isLoading) {
    return <LoadingMotion marginTop="80px" marginBottom="80px" />;
  }

  return (
    <div className="row">
      <p>カスタムフック</p>
      {data.results.map(user => (
        <div key={user.login.uuid} className="col col-md-6 col-xl-4 mb-3">
          <User user={user} />
        </div>
      ))}
    </div>
  );
}
