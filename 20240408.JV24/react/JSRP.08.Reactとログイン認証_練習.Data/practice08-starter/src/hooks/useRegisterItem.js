import { useMutation, useQueryClient } from "@tanstack/react-query";
import customAxios from "../helpers/customAxios";

// Axiosを使い、商品情報を登録する関数
async function registerItem (name, price) {
  try {
    const res = await customAxios.post("/items", { name, price });
    console.log(res.data);
    if (res.data === "failed") {
      throw new Error("failed to register item");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// 上記関数とTanstackQueryを連携して利用するカスタムフック
export default function useRegisterItem () {
  const queryClient = useQueryClient();
  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: ({ name, price }) => registerItem(name, price),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["items"] })
  });

  return { registerItem: mutate, isError, isPending, isSuccess };
}
