import VocabRegistration from "./VocabRegistration";
import VocabTable from "./VocabTable";

/**
 * このコンポーネントは、以下で構成される
 * - 単語登録フォーム
 * - 単語一覧のテーブル
 */
export default function VocabHome() {
  return (
    <div>
      <VocabRegistration />
      <VocabTable />
    </div>
  );
}
