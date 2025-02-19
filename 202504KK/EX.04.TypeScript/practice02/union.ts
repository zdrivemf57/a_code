type Lang = "JAPANESE" | "ITALIAN" | "ENGLISH";

function greet(lang: Lang) {
  switch (lang) {
    case "JAPANESE":
      console.log("こんにちは");
      break;
    case "ITALIAN":
      console.log("Ciao");
      break;
    case "ENGLISH":
      console.log("Hello");
  }
}

greet("JAPANESE");
// greet("FRENCH"); /* Langに存在しないのでエラー */

export {};
