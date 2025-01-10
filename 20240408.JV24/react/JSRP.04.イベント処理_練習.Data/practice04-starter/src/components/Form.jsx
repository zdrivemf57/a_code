import { useRef, useState } from "react";

export default function Form () {
  // お問い合わせ内容取得用
  const messageRef = useRef();

  const ageRef = useRef(); // 独自追加


  // 各フォーム部品のステート
  const [email, setEmail] = useState("");
  const [magazine, setMagazine] = useState("1");
  const [area, setArea] = useState("3");
  const [isAbleToSubmit, setIsAbleToSubmit] = useState(false);
  const [hobbies, setHobbies] = useState({
    travel: true,
    sports: true,
    music: true,
    movie: true
  });

  // 送信時メッセージのステート
  const [alertStyle, setAlertStyle] = useState("d-none");
  const [alertMessage, setAlertMessage] = useState("");

  // メールアドレス入力中の処理
  const handleEmailChange = event => {
    const val = event.target.value;
    setEmail(val);

    // 正規表現によるメールアドレスのチェック
    const regex = /^[^@]+@[^@]+\.[^@]+$/;
    const isEmail = regex.test(val);

    // メールアドレスの形式の場合、送信ボタンを有効化
    if (isEmail) {
      setIsAbleToSubmit(true);
    } else {
      setIsAbleToSubmit(false);
    }
  };

  // お住まいの地域変更時の処理
  const handleAreaChange = event => {
    setArea(event.target.value);
  };

  // メールマガジンの登録変更時の処理
  const handleMagazineChange = event => {
    setMagazine(event.target.value);
  };

  // 趣味・興味変更時の処理
  const handleHobbyChange = event => {
    const { name, checked } = event.target;
    setHobbies(prev => {
      return { ...prev, [name]: checked };
    });
  };

  // 送信時の処理
  const handleSubmit = event => {
    event.preventDefault();
    const message = messageRef.current.value;
    const age = ageRef.current.value;
    if (message.trim() === "") {
      setAlertStyle("alert-danger");
      setAlertMessage("お問い合わせ内容を入力してください");
    } else {
      // フォームに入力されたデータ
      console.table({ email, area, magazine, hobbies, message });

      setAlertStyle("alert-success");
      setAlertMessage("お問い合わせ内容を送信しました");
      setEmail("");
      setArea("3");
      setMagazine("1");
      ageRef.current.value = 20;
      setHobbies({
        travel: true,
        sports: true,
        music: true,
        movie: true
      });
      setIsAbleToSubmit(false);
    }
  };

  return (
    <div>
      <h2>フォームイベント</h2>

      <div className={`alert ${alertStyle}`}>{alertMessage}</div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="contact-email">
            連絡先メールアドレス
          </label>
          <input
            type="text"
            className="form-control"
            id="contact-email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="area">
            お住まいの地域
          </label>
          <select
            name="area"
            id="area"
            className="form-control"
            onChange={handleAreaChange}
            value={area}
          >
            <option value="1">東京都内</option>
            <option value="2">関東地方(東京以外)</option>
            <option value="3">国内(関東以外)</option>
            <option value="4">海外</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            お問い合わせ内容
          </label>
          <textarea
            type="text"
            className="form-control"
            ref={messageRef}
            name="message"
            id="message"
            rows="8"
          />
        </div>

        <div className="mb-3">
          <p>
            <span className="me-3">メールマガジンの登録</span>
            <label className="form-label me-2">
              <input
                type="radio"
                name="magazine"
                value="1"
                checked={magazine === "1"}
                onChange={handleMagazineChange}
              />
              希望する
            </label>
            <label className="form-label">
              <input
                type="radio"
                name="magazine"
                value="2"
                checked={magazine === "2"}
                onChange={handleMagazineChange}
              />
              希望しない
            </label>
          </p>
        </div>

        <div className="mb-3">
          <p>
            <span className="me-3">趣味・興味</span>
            <label className="form-label me-2">
              <input
                type="checkbox"
                value="1"
                name="travel"
                checked={hobbies.travel}
                onChange={handleHobbyChange}
              />
              旅行
            </label>
            <label className="form-label me-2">
              <input
                type="checkbox"
                value="2"
                name="sports"
                checked={hobbies.sports}
                onChange={handleHobbyChange}
              />
              スポーツ
            </label>
            <label className="form-label me-2">
              <input
                type="checkbox"
                value="3"
                name="music"
                checked={hobbies.music}
                onChange={handleHobbyChange}
              />
              音楽
            </label>
            <label className="form-label">
              <input
                type="checkbox"
                value="4"
                name="movie"
                checked={hobbies.movie}
                onChange={handleHobbyChange}
              />
              映画
            </label>
          </p>
        </div>

        <div className="mb-3">
          <p>年齢（独自追加）<br />
            <input type="number" defaultValue={20} min={0} ref={ageRef} />
          </p>
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          disabled={!isAbleToSubmit}
        />
      </form>
    </div>
  );
}
