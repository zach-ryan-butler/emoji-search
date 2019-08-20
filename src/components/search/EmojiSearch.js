import React from 'react';
import PropTypes from 'prop-types';

function EmojiSearch({ text, textHandler }) {
  return (
    <input
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
