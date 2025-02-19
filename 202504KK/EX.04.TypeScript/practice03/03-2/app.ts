import { Member, PremiumMember, SeniorMember } from "./Member.class";

const members: Member[] = [];
members.push(new Member("山田太郎", 25));
members.push(new SeniorMember("佐藤花子", 28));
members.push(new PremiumMember("鈴木次郎", 31, 1000));
members.push(new PremiumMember("木村洋子", 24, 2000));
members.forEach(member => {
  if (member instanceof SeniorMember) {
    console.log("シニア会員:");
  } else if (member instanceof PremiumMember) {
    console.log("プレミアム会員:");
  } else {
    console.log("通常会員:");
  }

  member.showInfo();
});
