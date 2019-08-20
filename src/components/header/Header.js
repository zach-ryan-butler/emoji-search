import React from 'react';
import styles from './Header.css';

function Header() {
  return (
    <section className={styles.Header}>
      <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f638.png"/>
      <h1>Emoji Search</h1>
      <img src="https://cdn.jsdelivr.net/emojione/assets/png/1f63a.png"/>
    </section>
  );
}

export default Header;
