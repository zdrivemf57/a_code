import { useQuery } from "@tanstack/react-query";
import { getLocations } from "../../helpers/api/locationApi";
/**------------------------------------------------------------
 * 備品の配置場所リストを取得するフック
 * ⇒ 備品登録・編集フォームで利用する
 * ⇒ 取得した情報は、TanstackQueryを利用してキャッシュする
 * 
 * 戻り値は以下の情報をもつオブジェクト
 * locationList: 登録・編集用関数
 * isLoadingLocation: サーバーとの通信状態 
 * isErrorLocation: エラーの有無
 --------------------------------------------------------------*/
export default function useLocationList() {
  const { data: locationList, isLoading, isError } = useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
        const {status, data} = await getLocations();
        if(status !== "OK") {        
            throw new Error();
        }

        return data.locationList;
    },
    staleTime: Infinity
  });

  return {
    locationList,
    isLoadingLocation: isLoading,
    isErrorLocation: isError
  };
}
