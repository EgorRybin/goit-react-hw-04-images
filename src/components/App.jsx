import { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { Searchbar } from './Searchbar/Searchbar';
import getItems from '../Api/Api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import s from './App.module.css';

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState('');

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const fetchData = async () => {
        const data = await getItems(count, inputValue);
        setImages(prev => [...prev, ...data.data.hits]);
      };
      fetchData();
      setIsLoading(false);
    }
  }, [count, inputValue]);

  const toogleModal = img => {
    setShowModal(img);
  };

  const handleSubmitValue = data => {
    if (data !== inputValue) {
      setIsLoading(true);
      setInputValue(data);
      setImages([]);
      setCount(1);
      setIsLoading(false);
    }
  };

  const loadMore = () => {
    setCount(prev => prev + 1);
  };
  return (
    <div className={s.App}>
      <ErrorBoundary>
        {showModal && <Modal toogleModal={toogleModal} imgId={showModal} />}
        <Searchbar handleSubmitValue={handleSubmitValue} />
        <ImageGallery array={images} toogleModal={toogleModal} />
        {isLoading && (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            wrapperStyle
          />
        )}
        {images.length > 0 && <Button loadmore={loadMore} />}
      </ErrorBoundary>
    </div>
  );
};
