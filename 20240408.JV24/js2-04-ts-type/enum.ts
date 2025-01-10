// Enum型の定数定義
enum Lang {
  JAPANESE, //0
  ITALIAN, //1
  ENGLISH //2
}

function greet(lang: Lang) {
  switch (lang) {
    case Lang.JAPANESE:
      console.log("こんにちは");
      break;
    case Lang.ITALIAN:
      console.log("Ciao");
      break;
    case Lang.ENGLISH:
      console.log("Hello");
  }
}

greet(Lang.JAPANESE);
greet(1); // greet(Lang.ITALIAN); と同じ
// greet(3); /* 0～2の範囲外なのでエラー */
