import { useAtom } from "jotai";
import { loginUserAtom } from "../atoms/loginUserAtom";

export default function useGetLoginUser () {
  const loginUserInStorage = JSON.parse(localStorage.getItem("loginUser"));
  const [loginUser, setLoginUser] = useAtom(loginUserAtom);
  if (!loginUser) {
    setLoginUser(loginUserInStorage);
  }

  return loginUser;
}
