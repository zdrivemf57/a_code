import { useRef } from "react";
import { validateEditMemberForm } from "../../helpers/formValidator";

/**------------------------------------------------------------ 
 * 会員情報編集フォームの入力値を取得し、バリデーションをするフック
 * 戻り値は以下の情報をもつオブジェクト
 * refs: 入力部品と連携するための Ref 
 * validate: 入力値取得＆バリデーション用関数 
 --------------------------------------------------------------*/
export default function useMemberEditForm() {
  const nameRef = useRef();
  const loginIdRef = useRef();
  const loginPassRef = useRef();

  const validate = () => {
    // 入力値の取得
    const name = nameRef.current.value;
    const loginId = loginIdRef.current.value;
    const loginPass = loginPassRef.current.value;
    // バリデーション
    const { isValid, validationErrors } = validateEditMemberForm({
      name,
      loginId,
      loginPass
    });

    return {
      memberToBeSaved: { name, loginId, loginPass },
      isValid,
      validationErrors
    };
  };
  
  return { refs: { nameRef, loginIdRef, loginPassRef }, validate };
}
