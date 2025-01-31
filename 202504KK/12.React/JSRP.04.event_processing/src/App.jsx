import { useRef, useState } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();
  const ageRef = useRef();

  const [nickName, setNickName] = useState("");

  const [area, setArea] = useState("2");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = Number(ageRef.current.value);
    // const age = Number(ageRef.current.value);
    console.table({ name, age });
  };

  const handleChange = (e) => setArea(e.target.value);

  const [hobbies, setHobbies] = useState({
    cooking: false,
    sports: false,
    travel: false,
  });

  const handleChange2 = (e) => {
    const { name, checked } = e.target;
    setHobbies((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <>
      <h2>フォーム</h2>
      <form onSubmit={handleSubmit}>
        <p>
          氏名: <input type="text" ref={nameRef} />
        </p>
        <p>
          年齢: <input type="number" ref={ageRef} defaultValue={20} min={0} />
        </p>
        <p>●useRefとフォーム処理の実装<br />
        ・初期値はdefaultValue属性で設定する<br />
        - value属性を設定してしまうと、入力値を変更することができない (onChange属性に対応するイベントハンドラが必要になる)
        </p>
        メールマガジン：
        <input type="radio" name="magazine" defaultChecked /> 希望する
        <input type="radio" name="magazine" /> 希望しない お住まい：
        <select defaultValue={1}>
          <option value={1}>東京都内</option>
          <option value={2}>東京都以外</option>
        </select>
        備考：
        <textarea cols="30" rows="2" defaultValue="特になし" />
        <p>●useStateとフォーム処理の実装<br />
        ・value属性の値としてステート変数をセットする<br />
        - これだけだと、ユーザーは何も入力できなくなってしまうので、onChange属性でステート値を更新する</p>
        ニックネーム:{" "}
        <input
          type="text"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
        <p>
        ・select/optionのフォーム部品に初期値を設定する場合は、select要素にvalue属性とonChange属性を設定する
        </p>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="1">国内</option>
          <option value="2">海外</option>
        </select>
        <p>・ラジオボタンに初期値を設定する場合は、checked属性とonChange属性を設定する</p>
        <input
          type="radio"
          name="area"
          value="1"
          checked={area === "1"}
          onChange={handleChange}
        />
        国内
        <input
          type="radio"
          name="area"
          value="2"
          checked={area === "2"}
          onChange={handleChange}
        />
        海外
        <p>・複数選択可能なチェックボックスに初期値を設定する場合は、checked属性とonChange属性を設定する<br />
        チェックされているとtrue、されていないとfalseとなる</p>
        <input
          type="checkbox"
          name="cooking"
          value="1"
          checked={hobbies.cooking}
          onChange={handleChange2}
        />
        料理
        <input
          type="checkbox"
          name="sports"
          value="2"
          checked={hobbies.sports}
          onChange={handleChange2}
        />
        スポーツ
        <input
          type="checkbox"
          name="travel"
          value="3"
          checked={hobbies.travel}
          onChange={handleChange2}
        />
        旅行
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
