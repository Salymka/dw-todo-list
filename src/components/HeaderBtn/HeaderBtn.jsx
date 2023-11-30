import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './HeaderBtn.scss';

function HeaderBtn({ children, link = null, onClick = null }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (link ? navigate(link) : onClick ? onClick() : '')}
      className={styles.headerBtn}
    >
      {children}
    </button>
  );
}

export default HeaderBtn;
