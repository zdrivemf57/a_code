import { useMutation, useQueryClient } from "@tanstack/react-query"; 
import customAxios from "../helpers/customAxios"; 

// Axios を使い、商品情報を登録する関数
async function registerItem (name, price) { 
 await customAxios.post("/items", { name, price }); 
} 

// 上記関数と TanstackQuery を連携して利用するカスタムフック
export default function useRegisterItem () { 
 const queryClient = useQueryClient(); 
 const { mutate, isError, isPending, isSuccess } = useMutation({ 
 mutationFn: ({ name, price }) => registerItem(name, price), 
 onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] })
 }); 
 return { registerItem: mutate, isError, isPending, isSuccess }; 
}