import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toogleModal, imgId }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      toogleModal('');
    }
  };

  const onKeyDown = e => {  
    if (e.code === 'Escape') {
      toogleModal('');
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={onOverlayClick}>
      <div className={s.Modal}>
        <img src={imgId} alt="" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  imgId: PropTypes.string.isRequired
};
