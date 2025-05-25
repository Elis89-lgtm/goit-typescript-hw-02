import Modal from "react-modal";
import style from "./ImageModal.module.css";

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  src: string;
  alt: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.6)",
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, src, alt }: ImageModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={src} alt={alt} className={style.image} />
    </Modal>
  );
};
export default ImageModal;
