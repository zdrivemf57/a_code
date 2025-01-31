/**
 * 地域選択のプルダウンメニュー
 * 選択されている地域のステートは親コンポーネントで管理
 */
export default function InputArea({ choice, setChoice }) {
  const choices = [
    { val: 1, label: "東京都内" },
    { val: 2, label: "関東地方(東京以外)" },
    { val: 3, label: "国内(関東以外)" },
    { val: 4, label: "海外" }
  ];

  const handleChange = (e) => {
    setChoice(Number(e.target.value));
  };

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="area">
        お住まいの地域
      </label>
      <select
        name="area"
        id="area"
        className="form-control"
        onChange={handleChange}
        value={choice}
      >
        {choices.map((c) => (
          <option key={c.val} value={c.val}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
}
