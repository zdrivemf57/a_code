import { Button, Modal } from "react-bootstrap";
import useItemDelete from "../../hooks/item/useItemDelete";

/**
 * 削除確認モーダル
 * モーダルの表示・非表示のステート(modalState)は親コンポーネントで管理
 */
export default function ItemDeleteModal({ modalState, itemId }) {
  const { showModal, setShowModal } = modalState;
  const deleteItem = useItemDelete();

  const handleClose = () => setShowModal(false);
  const handleDelete = () => deleteItem(itemId);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>備品削除の確認</Modal.Title>
      </Modal.Header>
      <Modal.Body>この備品情報を削除してよろしいですか？</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
          削除を確定する
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
