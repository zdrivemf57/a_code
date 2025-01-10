import { Member2, PremiumMember2 } from "./Member2.class";

const members2: Member2[] = [];
members2.push(new Member2("山田太郎", 25));
members2.push(new Member2("佐藤花子", 28));
members2.push(new PremiumMember2("鈴木次郎", 31, 1000));
members2.push(new PremiumMember2("木村洋子", 24, 2000));

members2.forEach(member => member.showInfo());
