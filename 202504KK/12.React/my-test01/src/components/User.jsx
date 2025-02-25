export default function User({ user }) {
  // 1人分のデータを渡されているので、受け取ってから分割代入する。
  const { name, email, location, picture } = user;
  const userName = `${name.title}. ${name.first} ${name.last}`;
  const address = `${location.street.number} ${location.street.name}, ${location.city}`;

  return (
    <div className="card">
      <img className="card-img-top" src={picture.large} alt={userName} />
      <div className="card-body">
        <h5 className="card-title">{userName}</h5>
        <p className="card-text">
          <strong>Email:</strong> {email}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
}
