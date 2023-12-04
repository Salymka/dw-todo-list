import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './CustomButton.scss';

function customButton({ children, link = null, onClick = null }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (link ? navigate(link) : onClick ? onClick() : '')}
      className={styles.customBtn}
    >
      {children}
    </button>
  );
}

export default customButton;
