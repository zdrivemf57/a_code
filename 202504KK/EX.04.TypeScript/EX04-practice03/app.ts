import { Member } from "./Member.class"; 

const members: Member[] = []; 
members.push(new Member("山田太郎", 25)); 
members.push(new Member("佐藤花子", 28)); 
members.push(new Member("鈴木次郎", 31)); 
members.push(new Member("木村洋子", 24)); 
members.forEach(member => member.showInfo());