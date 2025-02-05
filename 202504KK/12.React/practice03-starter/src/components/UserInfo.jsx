import { useRef, useState } from "react";

export default function UserInfo() {
  const addressRef = useRef();

  const [info, setInfo] = useState({
    name: "山田太郎",
    birthday: "1998-05-05",
    address: "東京都"
  });

  const handleClick = () => {
    const address = addressRef.current.value;
    if (address) {
      setInfo((prev) => ({ ...prev, address }));
      addressRef.current.value = "";
    }
  };
  
  return (
    <div>
      <h2>ユーザー情報</h2>
      <ul>
        <li>名前: {info.name}</li>
        <li>生年月日: {info.birthday}</li>
        <li>住所: {info.address}</li>
      </ul>
      <p>
        新住所: <input type="text" className="me-3" ref={addressRef} />
        <button className="btn btn-primary" onClick={handleClick}>
          住所の更新
        </button>
      </p>
    </div>
  );
}
