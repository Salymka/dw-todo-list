import React from 'react';

import styles from './DeleteBtn.scss';

function DeleteBtn({ onClick }) {
  return <button className={styles.deleteBtn} onClick={onClick}></button>;
}

export default DeleteBtn;
