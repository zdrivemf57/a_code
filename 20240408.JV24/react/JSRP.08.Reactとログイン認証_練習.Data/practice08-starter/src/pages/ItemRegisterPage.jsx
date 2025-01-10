import ItemRegister from "./../components/ItemRegister";
import LoginUserOnly from "../components/LoginUserOnly";

export default function ItemRegisterPage () {
  return (
    <LoginUserOnly>
      <div>
        <h1>商品登録</h1>
        <ItemRegister />
      </div>
    </LoginUserOnly>
  );
}
