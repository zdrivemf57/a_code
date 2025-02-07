import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";

const pattern = DateTimeFormatter.ofPattern("y年MM月dd日 HH時mm分");
const numberFormatter = new Intl.NumberFormat();

// 日時を「y年MM月dd日 HH時mm分」の形式にフォーマットする
export function formatDateTime(dateTimeString) {
  return LocalDateTime.parse(dateTimeString).format(pattern);
}

// 数値をカンマ区切り(3桁ごと)の形式にフォーマットする
export function formatNumber(number) {
  return numberFormatter.format(number);
}
