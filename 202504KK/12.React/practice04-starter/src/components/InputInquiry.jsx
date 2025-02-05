/**
 * お問い合わせ内容入力欄
 * 入力値のステートは親コンポーネントで管理
 */
export default function InputInquiry({ inquiry, setInquiry }) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="message">
        お問い合わせ内容
      </label>
      <textarea
        type="text"
        className="form-control"
        name="message"
        id="message"
        rows="8"
        value={inquiry}
        onChange={(e) => setInquiry(e.target.value)}
      />
    </div>
  );
}
