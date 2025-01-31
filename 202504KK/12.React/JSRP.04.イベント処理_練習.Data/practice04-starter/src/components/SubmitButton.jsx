/**
 * 送信ボタン
 * ボタンの活性・非活性ステート、ボタンラベルは親コンポーネントで管理
 */
export default function SubmitButton({ isActive, buttonLabel }) {
  return (
    <div>
      <input
        value={buttonLabel}
        type="submit"
        className="btn btn-primary"
        disabled={!isActive}
      />
    </div>
  );
}
