// import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem  />
    </ul>
  );
};
export default ImageGallery;

// ImageGalleryItem.propTypes = {
  // toogleModal: PropTypes.func.isRequired,
  // array: PropTypes.array.isRequired,
// };
