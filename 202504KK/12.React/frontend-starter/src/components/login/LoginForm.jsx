import { useRef, useState } from "react";
import useLogin from "./../../hooks/auth/useLogin";
import { validateLoginForm } from "../../helpers/formValidator";
import { Col, Row } from "react-bootstrap";

export default function LoginForm() {
  // フォーム連携
  const loginIdRef = useRef();
  const loginPassRef = useRef();

  // バリデーションエラー
  const [errors, setErrors] = useState(null);

  const { login, isPending, isError } = useLogin();

  const submitData = (e) => {
    e.preventDefault();

    // 入力値の取得
    const loginId = loginIdRef.current.value;
    const loginPass = loginPassRef.current.value;

    // バリデーション(未入力チェック)
    const { isValid, validationErrors } = validateLoginForm({
      loginId,
      loginPass
    });

    if (!isValid) {
      setErrors(validationErrors);
    } else {
      setErrors(null);
      login({ loginId, loginPass });
    }
  };

  return (
    <Row>
      <Col lg={4} className="offset-lg-4">
        <form onSubmit={submitData}>
          <div className="form-floating">
            <input
              ref={loginIdRef}
              type="text"
              className="form-control rounded-0 rounded-top"
              id="floatingInput"
              placeholder="ログイン ID"
            />
            <label htmlFor="floatingInput">ログイン ID</label>
          </div>

          <div className="form-floating mb-3">
            <input
              ref={loginPassRef}
              type="password"
              className="form-control border-top-0 rounded-0 rounded-bottom"
              id="floatingPassword"
              placeholder="パスワード"
            />
            <label htmlFor="floatingPassword">パスワード</label>
          </div>

          <input
            className="w-100 btn btn-lg btn-primary mb-3"
            type="submit"
            value="ログイン"
            disabled={isPending}
          />
        </form>

        {errors?.loginId && (
          <div className="alert alert-danger my-2">{errors.loginId}</div>
        )}

        {errors?.loginPass && (
          <div className="alert alert-danger my-2">{errors.loginPass}</div>
        )}
        
        {isError && (
          <div className="alert alert-danger my-2">ログインに失敗しました</div>
        )}
      </Col>
    </Row>
  );
}
