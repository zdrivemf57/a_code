import { useAtom } from "jotai";
import { loginMemberAtom } from "../../atoms/loginMemberAtom";

/**------------------------------------------------------------ 
 * アトムに保存された認証情報をローカルストレージから取り出すためのカスタムフック
 * 戻り値は、ログイン中のメンバー
 --------------------------------------------------------------*/
 export default function useLoginMember() {
  const loginMemberInStorage = JSON.parse(localStorage.getItem("loginMember"));
  console.log('★useLoginMember_loginMemberInStorage', loginMemberInStorage)
  const [loginMember, setLoginMember] = useAtom(loginMemberAtom);
  console.log('★useLoginMember_loginMember1', loginMember)
  
  // アトムに認証情報が入っていない場合の対応
  if (!loginMember) {
    setLoginMember(loginMemberInStorage);
  }
  console.log('★useLoginMember_loginMember2', loginMember)
  
  return loginMember;
}
