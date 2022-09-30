import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './Searchbar.module.css';

const INITIAL_STATE = {
  inputValue: '',
};
class Searchbar extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitValue(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { hendleSubmit, handleChange } = this;
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
              value={this.state.inputValue}
              placeholder="Search images and photos"
              onChange={handleChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  handleSubmitValue: PropTypes.func.isRequired,
};
