import styles from "./ImageCard.module.css";

interface ImageCardProps {
  src: {
    small: string;
    regular: string;
  };
  alt: string;
  avg_color: string;
  openModal: (src: string, alt: string) => void;
}

const ImageCard = ({ src, alt, avg_color, openModal }: ImageCardProps) => {
  return (
    <div
      className={styles.thumb}
      style={{ backgroundColor: avg_color, borderColor: avg_color }}
    >
      <img
        src={src.small}
        alt={alt}
        onClick={() => openModal(src.regular, alt)}
        className={styles.image}
      />
    </div>
  );
};
export default ImageCard;
