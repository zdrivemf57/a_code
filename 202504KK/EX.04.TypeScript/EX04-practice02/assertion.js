// ボタンの選択
var button = document.getElementById("button");
// ボタンクリック時の処理
button.addEventListener("click", function (_event) {
    var area = document.getElementById("area");
    alert(area.value);
});
