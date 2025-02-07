import useItemList from "../../hooks/item/useItemList";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemListTable from "../../components/item/ItemListTable";
import ItemPagination from "../../components/item/ItemPagination";

export default function ItemListPage() {
  const { itemList, isLoading, isError } = useItemList();
  
  let mainContent = <></>;
  if (isError) {
    mainContent = <Alert variant="danger">エラーが発生しました</Alert>;
  } else if (isLoading) {
    mainContent = <p>Loading ...</p>;
  } else {
    mainContent = (
      <>
        <ItemListTable itemList={itemList} />
        <ItemPagination />
      </>
    );
  }

  return (
    <Container>
      <h1 className="my-4">備品リスト</h1>
      <Link to="/item/register" className="btn btn-primary mb-3">
        備品登録
      </Link>
      <Row>
        <Col>{mainContent}</Col>
      </Row>
    </Container>
  );
}
