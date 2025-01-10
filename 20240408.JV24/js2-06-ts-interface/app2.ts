import { Member, AdminMember } from "./AdminMember.class";

// AdminMemberは、抽象クラスMemberの型に代入できる
const member: Member = new AdminMember("taro", 25);

member.showInfo();

if (member.login("taro25")) {
  console.log("ログイン成功");
} else {
  console.log("ログイン失敗");
}
