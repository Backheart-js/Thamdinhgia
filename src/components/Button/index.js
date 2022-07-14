import React from 'react';
import styles from './Button.module.scss';

function Button({ onClick, style, text }) {
  return (
    <button onClick={onClick} className={`btn btn-${style} ${styles.btn}`}>
        {text}
    </button>
  )
}

export default Button