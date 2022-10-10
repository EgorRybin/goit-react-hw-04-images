// import PropTypes from 'prop-types';
import { useContext } from 'react';

import s from './ImageGalleryItem.module.css';
import { context } from 'components/Context/Context';

const ImageGalleryItem = () => {
  const value = useContext(context);
  const { images, toogleModal } = value;
  return images.map(({ id, webformatURL, largeImageURL }) => (
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

// ImageGalleryItem.propTypes = {
//   toogleModal: PropTypes.func.isRequired,
  // array: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     webformatURL: PropTypes.string.isRequired,
  //     largeImageURL: PropTypes.string.isRequired,
  //   })
  // ),
// };
