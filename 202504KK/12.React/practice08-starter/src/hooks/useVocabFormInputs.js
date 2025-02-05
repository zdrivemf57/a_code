/**
 * フォームに入力された「単語名」「意味」を取得し、バリデーションするためのフック
 * 引数: 単語名と意味の入力欄に紐づく Ref
 * 戻り値 1: 入力値を取得し、バリデーションする関数
 * 戻り値 2: フォームから入力値をクリアする関数
 */
export default function useVocabFormInputs({ wordRef, meaningRef }) {
  const getValuesAndValidate = () => {
    const word = wordRef.current.value;
    const meaning = meaningRef.current.value;
    
    // バリデーション(未入力チェック)
    let isValid = true;
    if (word.trim() === "" || meaning.trim() === "") {
      isValid = false;
    }
    return { word, meaning, isValid };
  };

  const resetFormInputs = () => {
    wordRef.current.value = "";
    meaningRef.current.value = "";
  };

  return { getValuesAndValidate, resetFormInputs };
}
