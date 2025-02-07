import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatNumber } from "../../helpers/formatter";

export default function ItemListTable({ itemList }) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>品名</th>
          <th>数量</th>
          <th>場所</th>
          <th>リンク</th>
        </tr>
      </thead>
      <tbody>
        {itemList.map((item) => (
          <tr key={item?.id} className="align-middle">
            <td>{item?.id}</td>
            <td>{item?.name}</td>
            <td>{item?.amount && formatNumber(item.amount)}</td>
            <td>{item?.location?.name}</td>
            <td>
              <Link className="btn btn-warning" to={`/item/detail/${item?.id}`}>
                詳細
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
