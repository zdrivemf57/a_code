import { useAtom } from "jotai";
import { loginMemberAtom } from "../../atoms/loginMemberAtom";

export default function useLoginMember() {
  const loginMemberInStorage = JSON.parse(localStorage.getItem("loginMember"));
  const [loginMember, setLoginMember] = useAtom(loginMemberAtom);

  // アトムに認証情報が入っていない場合の対応
  if (!loginMember) {
    setLoginMember(loginMemberInStorage);
  }
  
  return loginMember;
}
