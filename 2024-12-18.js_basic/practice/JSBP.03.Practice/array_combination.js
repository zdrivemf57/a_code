const items = [
    { name: 'テレビ', price: 78000 },
    { name: '洗濯機', price: 32000 },
    { name: '冷蔵庫', price: 99000 },
    { name: '掃除機', price: 24000 }
];

const newItems = items.filter(item => item.price >= 30000)
    .sort((item1, item2) => item1.price - item2.price)
    .map(item => {
        const newPrice = Math.floor(item.price * 1.1);
        return { ...item, taxedPrice: newPrice, type: '家電' }
});

console.log(newItems);