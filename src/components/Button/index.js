import React from 'react';
import styles from './Button.module.scss';

function Button({ onClick, type, text }) {
  return (
    <button onClick={onClick} className={`btn btn-${type} ${styles.btn}`}>
        {text}
    </button>
  )
}

export default Button