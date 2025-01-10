const items = [
  { id: 1, name: "りんご", place: "青森県", price: 200 },
  { id: 2, name: "ぶどう", place: "山梨県", price: 600 },
  { id: 3, name: "みかん", place: "愛媛県", price: 300 },
  { id: 4, name: "すいか", place: "山形県", price: 800 },
  { id: 5, name: "メロン", place: "栃木県", price: 900 }
];

export function getAllItems () {
  return items;
}

export function getItemById (id) {
  return items.find(item => item.id === id);
}
