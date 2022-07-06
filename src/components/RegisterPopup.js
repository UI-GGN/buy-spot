import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function RegisterPopup() {
  return (
    <Modal>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Register as:</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Buyer</Button>
          <Button variant="primary">Seller</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}
