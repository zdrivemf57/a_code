import { Outlet } from "react-router-dom";

export default function ItemsLayout() {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-9">
          <Outlet />
        </div>
        <hr />
        <footer>
          <p>
            日本各地に直接足を運び、厳選した商品を取り扱っています。
            <br />
            詳しくは inquiry@example.com までお問い合わせください。
          </p>
        </footer>
      </div>
    </div>
  );
}
