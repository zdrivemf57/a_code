import { useQuery } from "@tanstack/react-query";
import { getMember } from "../../helpers/api/memberApi";

// 会員情報を取得してキャッシュするカスタムフック
export default function useMemberGet() {
  const {
    data: member,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { status, data } = await getMember();
      if (status !== "OK") {
        throw new Error();
      }
      return data;
    }
  });

  return { member, isLoading, isError };
}
