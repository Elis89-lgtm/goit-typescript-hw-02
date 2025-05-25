import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import ImageCard from "../ImageCard/ImageCard";

interface ImageType {
  id: string | number;
  src: {
    small: string;
    regular: string;
  };
  alt: string;
  avg_color: string;
}
interface ImageGalleryProps {
  images: ImageType[];
  openModal: (src: string, alt: string) => void;
}

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <Grid>
      {images.map(({ id, src, alt, avg_color }) => (
        <GridItem key={id}>
          <ImageCard
            src={src}
            alt={alt}
            avg_color={avg_color}
            openModal={openModal}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ImageGallery;
