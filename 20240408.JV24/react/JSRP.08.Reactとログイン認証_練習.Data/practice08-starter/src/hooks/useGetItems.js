import { useQuery } from "@tanstack/react-query";
import customAxios from "../helpers/customAxios";

// Axiosを使い、商品リストを取得する関数
async function getItems () {
  try {
    const res = await customAxios.get("/items");
    return res.data;
  } catch (error) {
    console.log("failed to get items");
    console.log(error);
  }
}

// 上記関数をTanstackQueryと連携して利用するカスタムフック
export default function useGetItems () {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getItems
  });

  return { items: data, isLoading, isError };
}
