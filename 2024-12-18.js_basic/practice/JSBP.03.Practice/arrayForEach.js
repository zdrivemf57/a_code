const items = [
    { name: 'テレビ', price: 78000 },
    { name: '洗濯機', price: 32000 },
    { name: '冷蔵庫', price: 99000 }
];
// 商品名と税込み金額を表示
items.forEach(item => {
    // 税込み金額の計算(小数点以下四捨五入)
    let priceWithTax = item.price * 1.10;
    priceWithTax = priceWithTax.toFixed(0);

    console.log(`${item.name}: 税込み${priceWithTax}円`);
});