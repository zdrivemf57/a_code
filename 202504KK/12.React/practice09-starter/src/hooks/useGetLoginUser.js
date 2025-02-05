import { useAtom } from "jotai"; 
import { loginUserAtom } from "../atoms/loginUserAtom"; 

// ログイン中のユーザー情報を取得する
export default function useGetLoginUser () { 
 const loginUserInStorage = JSON.parse(localStorage.getItem("loginUser"));
 const [loginUser, setLoginUser] = useAtom(loginUserAtom); 
 if (!loginUser) { 
 setLoginUser(loginUserInStorage); 
 } 
 
 return loginUser; 
}