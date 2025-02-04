import { atom } from "jotai";
/**
 * 絞り込み機能用アトム
 * 現在選択中の単語の種類の ID 番号を保持する
 * 初期値は「0」→ 特に種類を指定しない
 */
const currentVocabTypeAtom = atom(0);

export { currentVocabTypeAtom };
