import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ array, toogleModal }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem array={array} toogleModal={toogleModal} />
    </ul>
  );
};
export default ImageGallery;

ImageGalleryItem.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
};
