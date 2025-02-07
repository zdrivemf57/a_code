import { useSetAtom } from "jotai";
import { useState } from "react";
import { loginMemberAtom } from "../../atoms/loginMemberAtom";
import { sendLoginIdAndPass } from "../../helpers/api/authApi";


/**------------------------------------------------------------
 * ログイン用フック
 * 戻り値は、以下を含むオブジェクト
 * login: ログイン用関数
 * isPending: サーバーとの通信状態 
 * isError: エラーの有無
 --------------------------------------------------------------*/
export default function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const setLoginMember = useSetAtom(loginMemberAtom);

  const login = async ({loginId, loginPass}) => {
    setIsPending(true);
    
    try {
        const {status, data} = await sendLoginIdAndPass({loginId, loginPass})
        
        if (status === "OK") {
            setLoginMember(data);
            setIsError(false);
        } else {
            setIsError(true);
        }
    } catch(error) {
        console.log(error);
        setIsError(true);
    }
        
    setIsPending(false);
  };
  
  return { login, isPending, isError };
}
