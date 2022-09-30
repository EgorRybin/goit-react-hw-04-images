import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ loadmore }) => {
  return (
    <button className={s.Button} type="button" onClick={loadmore}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
    loadmore: PropTypes.func.isRequired
}