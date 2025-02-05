import { useState } from "react";
import InputEmail from "./InputEmail";
import SubmitButton from "./SubmitButton";
import InputInquiry from "./InputInquiry";
import AlertMessage from "./AlertMessage";
import InputArea from "./InputArea";
import InputMailMagazine from "./InputMailMagazine";
import InputHobbies from "./InputHobbies";

export default function ContactForm() {
  // アラート
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  // メールアドレス(リアルタイムでチェック)
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  // お問い合わせ内容
  const [inquiry, setInquiry] = useState("");

  // お住いの地域(初期値: 国内(関東以外))
  const [area, setArea] = useState(3);

  // メールマガジン登録(初期値: 希望する)
  const [magazine, setMagazine] = useState(1);

  // 趣味(初期値: すべてチェック)
  const [hobbies, setHobbies] = useState({
    travel: true,
    sports: true,
    music: true,
    movie: true
  });

  // 送信ボタン押下時
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inquiry.trim() === "") {
      // お問い合わせ内容未入力
      setAlertMessage("お問い合わせ内容を入力してください");
      setAlertVariant("danger");
    } else {
      // フォームに入力されたデータの表示
      console.table({ email, area, magazine, hobbies, inquiry });

      // お問い合わせ完了
      setAlertMessage("お問い合わせ内容を送信しました");
      setAlertVariant("success");
      setInquiry("");
      setEmail("");
      setIsEmail(false);
      setArea(3);
      setMagazine(1);
      setHobbies({
        travel: true,
        sports: true,
        music: true,
        movie: true
      });
    }
    setShowAlert(true);
  };

  return (
    <div>
      <h2>フォームイベント</h2>
      {showAlert && (
        <AlertMessage message={alertMessage} variant={alertVariant} />
      )}

      <form onSubmit={handleSubmit}>
        <InputEmail email={email} setEmail={setEmail} setIsEmail={setIsEmail} />
        <InputArea choice={area} setChoice={setArea} />
        <InputInquiry inquiry={inquiry} setInquiry={setInquiry} />
        <InputMailMagazine choice={magazine} setChoice={setMagazine} />
        <InputHobbies choice={hobbies} setChoice={setHobbies} />
        <SubmitButton buttonLabel="送信する" isActive={isEmail} />
      </form>
    </div>
  );
}
