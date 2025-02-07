import { Col, Container, Row } from "react-bootstrap";
import useItemDetail from "../../hooks/item/useItemDetail";
import ItemNotFound from "../../components/item/ItemNotFound";
import ItemDetail from "../../components/item/ItemDetail";
import FlashMessage from "../../components/common/FlashMessage";

export default function ItemDetailPage() {
  const { item, isError, isLoading } = useItemDetail();

  let mainContent = <div></div>;
  if (isLoading) {
    mainContent = <p>Loading...</p>;
  } else if (isError) {
    mainContent = <ItemNotFound />;
  } else {
    mainContent = <ItemDetail item={item} />;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4">備品の詳細</h1>
          {mainContent}
        </Col>
      </Row>
      <FlashMessage />
    </Container>
  );
}
