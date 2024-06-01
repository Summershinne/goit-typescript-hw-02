import css from "./ImageModal.module.css";
import Modal from "react-modal";
import React from "react";
import { Image } from "../App/App.types";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
  imageUrlLarge: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, image }) => {
  return(
<Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <img className={css.img} src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  )
};

export default ImageModal;