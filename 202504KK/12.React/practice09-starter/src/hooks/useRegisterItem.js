import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import customAxios from "../helpers/customAxios"; 

// Axios を使い、商品情報を登録する関数
// mutationFn に指定したいので、関数を分けている
async function registerItem (name, price) { 
 await customAxios.post("/items", { name, price }); 
} 

// 上記関数と TanstackQuery を連携して利用するカスタムフック
export default function useRegisterItem () { 
 const queryClient = useQueryClient(); 
 const { mutate, isError, isPending, isSuccess } = useMutation({ 
 mutationFn: ({ name, price }) => registerItem(name, price), 
 // { queryKey: ["items"] }は、useQueryで設定したキーを指定
 onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] })
 }); 
 return { registerItem: mutate, isError, isPending, isSuccess }; 
}