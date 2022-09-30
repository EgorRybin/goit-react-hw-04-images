import PropTypes from 'prop-types';
import { useState } from 'react';

import s from './Searchbar.module.css';

export const Searchbar = ({handleSubmitValue}) => {
  const [inputValue, setInputValue] = useState('');
 
 const handleChange = evt => {
    setInputValue(evt.target.value)
  };

   const hendleSubmit = e => {
    e.preventDefault();
    handleSubmitValue(inputValue);
    reset();
  };

   const reset = () => {
    setInputValue('')
  };
  return (
      <>
        <header className={s.Searchbar}>
          <form className={s.SearchForm} onSubmit={hendleSubmit}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>
            <input
              name="inputValue"
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              value={inputValue}
              placeholder="Search images and photos"
              onChange={handleChange}
            />
          </form>
        </header>
      </>
    );
}


export default Searchbar;

Searchbar.propTypes = {
  handleSubmitValue: PropTypes.func.isRequired,
};
