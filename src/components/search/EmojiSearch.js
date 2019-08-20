import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmojiSearch.css';

function EmojiSearch({ text, textHandler }) {
  return (
    <input 
      className={styles.EmojiSearch}
      type="text"
      value={text}
      onChange={textHandler}
      placeholder="Search..." />
  );
}

EmojiSearch.propTypes = {
  text: PropTypes.string.isRequired,
  textHandler: PropTypes.func.isRequired
};

export default EmojiSearch;
