import { useState, useEffect } from 'react'
import { fetchPhotos } from '../fetchPhotos-api'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import LoadMoreButton from '../LoadMoreBtn/LoadMoreBtn'
import ImageModal from '../ImageModal/ImageModal'
import './App.css'
import { Image } from './App.types'

export default function App() {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedImageLarge, setSelectedImageLarge] = useState<string | null>(null);

   const handleSearch = async (newQuery:string):Promise<void> => {
    setQuery(newQuery);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = ():void => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") return;

    async function getPhotos():Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const data:Image[] = await fetchPhotos(query, page);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data ]
      });
      } catch (error) {
        setError(true);
      }
      finally {
        setLoading(false);
      }
    }
    getPhotos();
  }, [page, query]);

  const openImageModal = (image:Image):void => {
    setSelectedImage(image);
    setSelectedImageLarge(image.urls.regular);
  };

const closeImageModal = ():void => {
  setSelectedImage(null);
  setSelectedImageLarge(null);
};



  return (
    <div>
      <SearchBar onSearch={handleSearch } />
      {error && <ErrorMessage />}
      {loading && <Loader loading={ loading} />}
      {photos.length > 0 && <ImageGallery items={photos} onImageClick={openImageModal} />}
      {photos.length > 0 && !loading && <LoadMoreButton onClick={handleLoadMore} />}
      {selectedImage && <ImageModal isOpen={true} onRequestClose={closeImageModal} image={selectedImage} imageUrlLarge={selectedImageLarge} />}
    </div>
  )
};