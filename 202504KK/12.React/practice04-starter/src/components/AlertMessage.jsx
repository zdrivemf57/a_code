/**
 * アラートメッセージ表示コンポーネント
 * メッセージとアラートの種類(variant)のステートは親コンポーネントで管理
 */
export default function AlertMessage({ message, variant }) {
  const className = `alert alert-${variant}`;
  return <div className={className}>{message}</div>;
}
