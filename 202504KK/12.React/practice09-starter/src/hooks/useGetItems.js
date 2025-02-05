import { useQuery } from "@tanstack/react-query"; 
import customAxios from "../helpers/customAxios"; 

// Axios を使い、商品リストを取得する関数
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
 return { items: data, isLoading, isError }; 
}