import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import useLocationList from "../../hooks/item/useLocationList";
import useItemSave from "../../hooks/item/useItemSave";
import useItemForm from "../../hooks/item/useItemForm";
import { useState } from "react";

// 備品の初期値(備品登録時用)
const defaultItem = {
  name: "",
  amount: 0,
  location: {
    id: 1
  },
  note: ""
};

// 引数: フォームに表示する初期値
export default function ItemSaveForm({ item = defaultItem }) {
  // 備品の配置場所リスト
  const { locationList, isLoadingLocation, isErrorLocation } =
    useLocationList();

  let locationOptions = <option value="">-</option>;
  if (!isLoadingLocation && !isErrorLocation) {
    locationOptions = locationList.map((location) => (
      <option key={location.id} value={location.id}>
        {location.name}
      </option>
    ));
  }

  // フォーム値の取得とバリデーション
  const {
    refs: { nameRef, amountRef, locationRef, noteRef },
    validate
  } = useItemForm();
  const [errors, setErrors] = useState(null);
  console.log('★nameRef', nameRef);
  
  // 入力値の送信
  const { save, isPending, isError } = useItemSave();
  console.log('★isPending', isPending);
  console.log('★isError', isError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 入力値の取得＆バリデーション
    const { itemToBeSaved, isValid, validationErrors } = validate();
    console.log('★validate_done');
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // 保存
    if (item.id) {
      itemToBeSaved.id = item.id;
    }
    await save(itemToBeSaved);
    console.log('★save_done');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 編集時にのみ ID を表示 */}
      {item?.id && (
        <div className="form-group mb-3">
          <label htmlFor="formId">備品 ID</label>
          <input
            defaultValue={item?.id}
            type="text"
            id="formId"
            className="form-control"
            readOnly
            disabled
          />
        </div>
      )}

      {isError && <Alert variant="danger">備品の保存に失敗しました</Alert>}

      {errors?.name && <Alert variant="danger">{errors.name}</Alert>}
      <div className="form-group mb-3">
        <label htmlFor="formName">備品名</label>
        <input
          ref={nameRef}
          defaultValue={item?.name}
          type="text"
          id="formName"
          className="form-control"
          autoFocus
        />
      </div>

      {errors?.amount && <Alert variant="danger">{errors.amount}</Alert>}
      <div className="form-group mb-3">
        <label htmlFor="formAmount">数量</label>
        <input
          ref={amountRef}
          defaultValue={item?.amount}
          type="number"
          id="formAmount"
          className="form-control"
          step={1}
        />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="formLocation">場所</label>
        <select
          ref={locationRef}
          defaultValue={item?.location?.id}
          id="formLocation"
          className="form-control"
        >
          {locationOptions}
        </select>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="formNote">備考</label>
        <textarea
          ref={noteRef}
          defaultValue={item?.note}
          id="formNote"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="submit"
          className="btn btn-primary"
          value="保存"
          disabled={isPending}
        />
        {/* 登録時と編集時でキャンセルボタンの遷移先を変更 */}
        <Link
          to={item?.id ? `/item/detail/${item.id}` : "/item"}
          className="btn btn-secondary ms-2"
        >
          キャンセル
        </Link>
      </div>
    </form>
  );
}
