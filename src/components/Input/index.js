import React from 'react';
import styles from './Input.module.scss';

function Input({ type = "text", label, className, ...props }) {
    return (
        <div className={`${className} ${styles.wrapper}`}>
            <p className={styles.label}>
                {label}
            </p>
            {type === "select" ?
                <select className={`w-full ${styles.input}`}>
                    {props.options.map((option, index) => (
                        <option value={option} key={index}>{option}</option>
                    ))}
                </select>
             :
                <input type={type} className={`w-full ${styles.input}`}/>
            }
        </div>
    )
}

export default Input