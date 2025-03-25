import { useQuery } from "@tanstack/react-query"; 
import customAxios from "../helpers/customAxios"; 

// Axios を使い、商品リストを取得する関数
// queryFn: getItems の様に指定したいので、関数を分けている
async function getItems () { 
 const res = await customAxios.get("/items"); 
 return res.data; 
} 

// 上記関数を TanstackQuery と連携して利用するカスタムフック
export default function useGetItems () { 
 const { data, isLoading, isError } = useQuery({ 
 queryKey: ["items"], 
 queryFn: getItems 
 }); 
 // ↓ items: data の様に、dataは:の後に指定する
 // queryFnで指定した関数により取得されるデータを格納する
 // データが取得されるまでは「undefined」
 return { items: data, isLoading, isError }; 
}