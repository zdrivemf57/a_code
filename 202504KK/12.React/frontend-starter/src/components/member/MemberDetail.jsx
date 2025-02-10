import { Table } from "react-bootstrap";

export default function MemberDetail({ member }) {
  return (
    <Table bordered>
      <tbody>
        <tr>
          <th>ID 番号</th>
          <td>{member?.id}</td>
        </tr>
        <tr>
          <th>氏名</th>
          <td>{member?.name}</td>
        </tr>
        <tr>
          <th>ログイン ID</th>
          <td>{member?.loginId}</td>
        </tr>
      </tbody>
    </Table>
  );
}
