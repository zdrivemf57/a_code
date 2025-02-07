import { Col, Container, Row } from "react-bootstrap";
import ItemSaveForm from "../../components/item/ItemSaveForm";

export default function ItemRegisterPage() {
  return (
    <Container>
      <h1 className="mt-4">備品の登録</h1>
      <Row>
        <Col>
          <ItemSaveForm />
        </Col>
      </Row>
    </Container>
  );
}
