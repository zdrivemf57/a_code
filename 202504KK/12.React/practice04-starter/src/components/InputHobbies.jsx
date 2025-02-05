/**
 * 趣味選択のチェックボックス
 * 選択中の趣味は親コンポーネントで管理
 * choice は以下のようなデータを想定
 * {travel: true, sports: false, musice: false, movie: true}
 */
export default function InputHobbies({ choice, setChoice }) {
  const choices = [
    { val: 1, label: "旅行", name: "travel" },
    { val: 2, label: "スポーツ", name: "sports" },
    { val: 3, label: "音楽", name: "music" },
    { val: 4, label: "映画", name: "movie" }
  ];

  /**
   * <input type="checkbox" name="travel">旅行
   * <input type="checkbox" name="sports">スポーツ
   * <input type="checkbox" name="music">音楽
   * <input type="checkbox" name="movie">映画
   *
   * name には変更があったチェックボックスの name 属性値が入る
   * checked には、チェックが入った場合には true が、チェックが外れた場合は false が入る
   */
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setChoice((prev) => {
      return { ...prev, [name]: checked };
    });
  };

  return (
    <div className="mb-3">
      <p>
        <span className="me-3">趣味・興味</span>
        {choices.map((c) => (
          <label key={c.val} className="form-label me-2">
            <input
              type="checkbox"
              name={c.name}
              value={c.val}
              checked={choice[c.name]}
              onChange={handleChange}
            />
            {c.label}
          </label>
        ))}
      </p>
    </div>
  );
}
