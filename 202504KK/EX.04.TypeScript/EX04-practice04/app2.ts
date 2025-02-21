import { Member, AdminMember } from "./AdminMember.class";

// AdminMember は、抽象クラス Member の型に代入できる
const member: Member = new AdminMember("taro", 25);

member.showInfo();

if (member.login("taro25")) {
  console.log("ログイン成功");
} else {
  console.log("ログイン失敗");
}
