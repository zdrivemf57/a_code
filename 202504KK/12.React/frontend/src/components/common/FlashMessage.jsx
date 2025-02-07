import { useAtomValue } from "jotai";
import { Button, Modal } from "react-bootstrap";
import { useResetAtom } from "jotai/utils";
import { flashMessageAtom } from "../../atoms/flashMessageAtom";

export default function FlashMessage() {
  const { showMessage, messageBody } = useAtomValue(flashMessageAtom);
  const resetFlashMessage = useResetAtom(flashMessageAtom);

  const handleClose = () => {
    resetFlashMessage();
  };

  return (
    <Modal show={showMessage} onHide={handleClose} size="md">
      <Modal.Body>{messageBody}</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
