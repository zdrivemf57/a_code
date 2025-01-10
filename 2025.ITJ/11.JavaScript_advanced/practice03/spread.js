const item = {
    name: 'りんご',
    price: 100
};

// itemと同じものを参照
const sameItem = item;
// itemを複製(新しい配列を作成し、参照)
const copiedItem= {...item};

item.name = 'Apple';
console.log(sameItem.name, copiedItem.name); // Apple りんご