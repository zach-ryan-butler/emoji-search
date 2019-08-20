import React from 'react';
import PropTypes from 'prop-types';
import Emoji from './Emoji';
import styles from './Emojis.css';

function Emojis({ emojis }) {
  const emojiList = emojis.map(({ title, symbol }) => (
    <li key={title}>
      <Emoji title={title} symbol={symbol}/>
    </li>
  ));

  return (
    <ul className={styles.Emojis}>
      {emojiList}
    </ul>
  );
}

Emojis.propTypes = {
  emojis: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    keywords: PropTypes.string
  })).isRequired
};

export default Emojis;
