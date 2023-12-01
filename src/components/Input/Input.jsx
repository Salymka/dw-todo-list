import React from 'react';

import styles from './Input.scss';

function Input({ value, onChange, placeHolder, placeHolderUnderline = false }) {
  return (
    <>
      <input
        className={styles.customInput}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default Input;
