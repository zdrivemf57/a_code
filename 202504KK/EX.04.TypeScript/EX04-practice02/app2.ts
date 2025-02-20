import { Member2, PremiumMember } from "./Member2.class"; 

const members: Member2[] = []; 
members.push(new Member2("山田太郎", 25)); 
members.push(new Member2("佐藤花子", 28)); 
members.push(new PremiumMember("鈴木次郎", 31, 1000)); 
members.push(new PremiumMember("木村洋子", 24, 2000)); 
members.forEach(member => member.showInfo());