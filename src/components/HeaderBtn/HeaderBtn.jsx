import React from 'react';

import styles from './HeaderBtn.scss';

function HeaderBtn({ children }) {
  return <button className={styles.headerBtn}>{children}</button>;
}

export default HeaderBtn;
