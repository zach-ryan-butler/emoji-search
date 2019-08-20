import React from 'react';
import PropTypes from 'prop-types';

function Emoji({ symbol, title }) {
  return (
    <section>
      <span>{symbol} {title}</span>
    </section>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Emoji;
