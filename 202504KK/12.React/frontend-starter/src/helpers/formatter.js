import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";

const pattern = DateTimeFormatter.ofPattern("y 年 MM 月 dd 日 HH 時 mm 分");
const numberFormatter = new Intl.NumberFormat();

// 日時を「y 年 MM 月 dd 日 HH 時 mm 分」の形式にフォーマットする
export function formatDateTime(dateTimeString) {
  return LocalDateTime.parse(dateTimeString).format(pattern);
}

// 数値をカンマ区切り(3 桁ごと)の形式にフォーマットする
export function formatNumber(number) {
  return numberFormatter.format(number);
}
