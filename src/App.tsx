import "./App.css";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getPhotos, UnsplashPhoto } from "./apiService/photos";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

interface ImageItem {
  id: string;
  src: {
    small: string;
    regular: string;
  };
  alt: string;
  avg_color: string;
}

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);

      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );
        if (!photos.length) {
          setIsEmpty(true);
          return;
        }
        const normalized: ImageItem[] = photos.map((photo: UnsplashPhoto) => ({
          id: photo.id,
          src: {
            small: photo.urls.small,
            regular: photo.urls.regular,
          },
          alt: photo.alt_description || "Image",
          avg_color: photo.color || "#cccccc",
        }));
        setImages((prev) => [...prev, ...normalized]);
        const totalPages = Math.ceil(total_results / per_page);
        setIsVisible(page < totalPages);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);
  const onHandleSubmit = (value: string) => {
    setQuery(value);
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc("");
    setModalAlt("");
  };
  const openModal = (Src: string, Alt: string) => {
    setModalIsOpen(true);
    setModalSrc(Src);
    setModalAlt(Alt);
  };
  return (
    <>
      <SearchBar onSubmit={onHandleSubmit} />
      {!error && !isEmpty && !images.length && (
        <p style={{ textAlign: "center" }}>Let`s begin search 🔎</p>
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isVisible && images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={onLoadMore} disabled={isLoading}>
          {isLoading ? "Loading.." : "Load More"}
        </LoadMoreBtn>
      )}
      {isEmpty && (
        <p style={{ textAlign: "center" }}>Sorry, but we dont found image 🔎</p>
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </>
  );
};

export default App;
