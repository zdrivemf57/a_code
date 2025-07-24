// 画像を猫に変更
const img = document.querySelector('img');
img.setAttribute('src', 'images/cat.jpg');
img.setAttribute('alt', '猫');
img.setAttribute('width', 300);

// 見出しの枠線を除去
document.querySelector('h1').classList.remove('blueBorder');

// 画像に枠線を付ける
img.classdList.add('blueBorder');
