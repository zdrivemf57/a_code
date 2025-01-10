// ボタンの選択
const button = document.getElementById("button") as HTMLButtonElement;

// ボタンクリック時の処理
button.addEventListener("click", _event => {
  const area = document.getElementById("area")! as HTMLInputElement;
  alert(area.value);
});
