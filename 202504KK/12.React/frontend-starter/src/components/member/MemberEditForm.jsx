import { useState } from "react";
import { Table } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useMemberEditForm from "../../hooks/member/useMemberEditForm";
import useMemberEdit from "../../hooks/member/useMemberEdit";

export default function MemberEditForm({ member }) {
  //パスワードの表示・非表示切り替え
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // フォーム値の取得とバリデーション
  const {
    refs: { nameRef, loginIdRef, loginPassRef },
    validate
  } = useMemberEditForm();
  const [errors, setErrors] = useState(null);

  // 入力値の送信
  const { save, isPending, isError } = useMemberEdit();

  // 更新ボタン押下
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 入力値の取得＆バリデーション
    const { memberToBeSaved, isValid, validationErrors } = validate();
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // 保存
    save(memberToBeSaved);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Table bordered>
        <tbody>
          <tr>
            <th>ID 番号</th>
            <td>{member?.id}</td>
          </tr>
          <tr className="align-middle">
            <th>氏名</th>
            <td>
              <input
                ref={nameRef}
                type="text"
                defaultValue={member?.name}
                className="form-control"
              />
            </td>
          </tr>
          <tr className="align-middle">
            <th>ログイン ID</th>
            <td>
              <input
                ref={loginIdRef}
                type="text"
                defaultValue={member?.loginId}
                className="form-control"
              />
            </td>
          </tr>
          <tr className="align-middle">
            <th>
              パスワード
              <button
                className="bg-white border-0"
                type="button"
                tabIndex={-1}
                onClick={toggleShowPassword}
              >
                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
              </button>
            </th>
            <td>
              <input
                ref={loginPassRef}
                type={showPassword ? "text" : "password"}
                className="form-control"
              />
            </td>
          </tr>
        </tbody>
      </Table>

      {errors?.name && (
        <div className="alert alert-danger my-2">{errors.name}</div>
      )}

      {errors?.loginId && (
        <div className="alert alert-danger my-2">{errors.loginId}</div>
      )}

      {errors?.loginPass && (
        <div className="alert alert-danger my-2">{errors.loginPass}</div>
      )}

      {isError && (
        <div className="alert alert-danger my-2">
          他の会員が使用中のログイン ID で す
        </div>
      )}
      
      <input
        type="submit"
        value="更新"
        className="btn btn-primary form-control"
        disabled={isPending}
      />
    </form>
  );
}
