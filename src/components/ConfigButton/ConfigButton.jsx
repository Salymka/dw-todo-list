import React from 'react';

import styles from './ConfigButton.scss';

function ConfigButton({ onClick }) {
  return <button className={styles.configBtn} onClick={onClick}></button>;
}

export default ConfigButton;
