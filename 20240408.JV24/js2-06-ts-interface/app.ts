import { User, AdminUser } from "./AdminUser.class";

// AdminUserは、インターフェースUserの型に代入できる
const user: User = new AdminUser("taro", 25);

user.showInfo();

if (user.login("taro25")) {
  console.log("ログイン成功");
} else {
  console.log("ログイン失敗");
}
