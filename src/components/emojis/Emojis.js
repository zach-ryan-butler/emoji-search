import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';

function Emojis({ emojis }) {
  const emojiList = emojis.map(({ title, symbol, keywords }) => (
    <li key={symbol}>
      <Emoji title={title} symbol={symbol}/>
    </li>
  ));

  return (
    <ul>
      {emojiList}
    </ul>
  );
}

Emojis.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired
  })).isRequired
};

export default Emojis;
