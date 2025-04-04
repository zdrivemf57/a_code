import { useRef } from "react";
import { validateSaveItemForm } from "../../helpers/formValidator";

/**------------------------------------------------------------ 
 * 備品フォームの入力値を取得し、バリデーションをするフック
 * 戻り値は以下の情報をもつオブジェクト
 * refs: 入力部品と連携するための Ref 
 * validate: 入力値取得＆バリデーション用関数 
 --------------------------------------------------------------*/
export default function useItemForm() {
  const nameRef = useRef();
  const amountRef = useRef();
  const locationRef = useRef();
  const noteRef = useRef();

  const validate = () => {
    // 入力値の取得
    const name = nameRef.current.value;
    const amount = Number(amountRef.current.value);
    const locationId = Number(locationRef.current.value);
    const note = noteRef.current.value;

    // バリデーション
    const { isValid, validationErrors } = validateSaveItemForm({
      name,
      amount
    });
    console.log('★validate_done');
    
    return {
      // itemToBeSaved: { name, amount, locationId, note }, PDFのコード
      itemToBeSaved: { name, amount, location: {id: locationId}, note },
      isValid,
      validationErrors
    };
  };
  console.log('★validate', validate);

  return { refs: { nameRef, amountRef, locationRef, noteRef }, validate };
}
