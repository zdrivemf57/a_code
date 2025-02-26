/**
 * メールアドレス入力欄
 * 入力値および、入力値がメール形式か否かのステートは親コンポーネントで管理
 */
export default function InputEmail({ email, setEmail, setIsEmail }) {
  const handleChange = (e) => {
    // 入力値の取得
    const input = e.target.value;
    setEmail(input);
    // 正規表現によるメールアドレスの形式チェック
    const regex = /^[^@]+@[^@]+\.[^@]+$/;
    setIsEmail(regex.test(input));
    // ↑ regex.test(email)とはできない。この時点ではsetEmailの更新後の値を確認できないので。
    // 次にレンダリングされる時に更新される。
  };

  return (
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
        onChange={handleChange}
      />
    </div>
  );
}
