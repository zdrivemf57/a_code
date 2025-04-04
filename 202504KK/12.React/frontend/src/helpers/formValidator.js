/**-----------------------------------
 * 画面A01に対応
 * ログインフォームのバリデーション関数
 -------------------------------------*/
export function validateLoginForm({ loginId, loginPass }) {
  let isValid = true;
  const validationErrors = {};

  if (!loginId) {
    isValid = false;
    validationErrors.loginId = "ログインIDを入力してください";
  }

  if (!loginPass) {
    isValid = false;
    validationErrors.loginPass = "パスワードを入力してください";
  }

  // 入力に不備があるか否かを返す
  return { isValid, validationErrors };
}

/**-------------------------------------
   * 画面B02, B03に対応
   * 備品登録・編集フォームのバリデーション関数
   ---------------------------------------*/
export function validateSaveItemForm({ name, amount }) {
  let isValid = true;
  const validationErrors = {};

  if (!name) {
    isValid = false;
    validationErrors.name = "備品名を入力してください";
  } else if (name.length > 50) {
    isValid = false;
    validationErrors.name = "備品名は50文字以内で入力してください";
  }

  if (amount < 0) {
    isValid = false;
    validationErrors.amount = "数量は0以上の整数を入力してください";
  }

  return { isValid, validationErrors };
}

/**-------------------------------------
   * 画面C02に対応
   * 会員情報更新フォームのバリデーション関数
   ---------------------------------------*/
export function validateEditMemberForm({ name, loginId, loginPass }) {
  let isValid = true;
  const validationErrors = {};

  if (!name) {
    isValid = false;
    validationErrors.name = "氏名を入力してください";
  } else if (name.length > 20) {
    isValid = false;
    validationErrors.name = "氏名は20文字以内で入力してください";
  }

  if (!loginId) {
    isValid = false;
    validationErrors.loginId = "ログインIDを入力してください";
  } else if (loginId.length > 20) {
    isValid = false;
    validationErrors.name = "ログインIDは20文字以内で入力してください";
  }

  if (!loginPass) {
    isValid = false;
    validationErrors.loginPass = "パスワードを入力してください";
  }

  // 入力に不備があるか否かを返す
  return { isValid, validationErrors };
}
