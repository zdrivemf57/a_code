import { Table } from "react-bootstrap";

export default function MemberDetail({ member }) {
  return (
    <Table bordered>
      <tbody>
        <tr>
          <th>ID番号</th>
          <td>{member?.id}</td>
        </tr>
        <tr>
          <th>氏名</th>
          <td>{member?.name}</td>
        </tr>
        <tr>
          <th>ログインID</th>
          <td>{member?.loginId}</td>
        </tr>
      </tbody>
    </Table>
  );
}
