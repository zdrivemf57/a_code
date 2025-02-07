import { Col, Container, Row } from "react-bootstrap";
import ItemNotFound from "../../components/item/ItemNotFound";
import ItemSaveForm from "../../components/item/ItemSaveForm";
import useItemDetail from "../../hooks/item/useItemDetail";

export default function ItemEditPage() {
  const { item, isError, isLoading } = useItemDetail();

  let mainContent = <div></div>;
  if (isLoading) {
    mainContent = <p>Loading...</p>;
  } else if (isError) {
    mainContent = <ItemNotFound />;
  } else {
    mainContent = <ItemSaveForm item={item} />
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">備品情報の編集</h1>
          {mainContent}
        </Col>
      </Row>
    </Container>
  );
}
