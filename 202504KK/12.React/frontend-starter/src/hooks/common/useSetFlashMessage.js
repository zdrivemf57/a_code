import { useSetAtom } from "jotai";
import { flashMessageAtom } from "../../atoms/flashMessageAtom";
import { useResetAtom } from "jotai/utils";

// フラッシュメッセージ・コンポーネントのメッセージと表示時間をセットする関数を返す
export default function useSetFlashMessage() {
  const setFlashMessageAtom = useSetAtom(flashMessageAtom);
  const resetFlashMessage = useResetAtom(flashMessageAtom);

  const setFlashMessage = (messageBody, showingTime) => {
    // メッセージを設定し、表示する
    setFlashMessageAtom({
      showMessage: true,
      messageBody
    });
    
    // 指定された時間後に、メッセージを非表示にする
    setTimeout(() => {
      resetFlashMessage();
    }, showingTime);
  };

  return setFlashMessage;
}
