import css from "./ImageModal.module.css";
import Modal from 'react-modal';

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageUrlLarge }) {
    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    border: 'none', 
    maxWidth: '90%', 
    maxHeight: '90%',
    overflow: 'auto', 
  },
};
    return (
          <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Image Modal">
            <img src={imageUrlLarge} alt="Large" />
        </Modal>
    )
}