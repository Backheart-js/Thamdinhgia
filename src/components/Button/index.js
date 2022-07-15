import React from 'react';
import styles from './Button.module.scss';

function Button({ onClick, type, text, ...props }) {
  return (
    <button onClick={onClick} className={`btn btn-${type} ${styles.btn}`} {...props}>
        {text}
    </button>
  )
}

export default Button