import React from 'react';
import PropTypes from 'prop-types';
import styles from './Emoji.css';

function Emoji({ symbol, title }) {
  return (
    <section className={styles.Emoji}>
      <span className={styles.symbol}>{symbol}</span>
      <span className={styles.title}>{title}</span>
    </section>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Emoji;
