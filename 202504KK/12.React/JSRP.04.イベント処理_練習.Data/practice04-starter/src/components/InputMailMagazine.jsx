/**
 * メールマガジン登録選択のラジオボタン
 * 選択中のステートは親コンポーネントで管理
 */
export default function InputMailMagazine({ choice, setChoice }) {
  const choices = [
    { val: 1, label: "希望する" },
    { val: 2, label: "希望しない" }
  ];

  const handleChange = (e) => {
    setChoice(Number(e.target.value));
  };
  
  return (
    <div className="mb-3">
      <p>
        <span className="me-3">メールマガジンの登録</span>
        {choices.map((c) => (
          <label key={c.val} className="form-label me-2">
            <input
              type="radio"
              name="magazine"
              value={c.val}
              checked={choice === c.val}
              onChange={handleChange}
            />
            {c.label}
          </label>
        ))}
      </p>
    </div>
  );
}
