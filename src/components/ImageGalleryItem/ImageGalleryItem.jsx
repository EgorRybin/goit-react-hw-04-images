import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ array, toogleModal }) => {
  return array.map(({ id, webformatURL, largeImageURL }) => (
    <li
      className={s.ImageGalleryItem}
      key={id}
      onClick={() => {
        toogleModal(largeImageURL);
      }}
    >
      <img
        src={webformatURL}
        alt=""
        name={largeImageURL}
        className={s.ImageGalleryItemImage}
      />
    </li>
  ));
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
