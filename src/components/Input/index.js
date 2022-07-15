import React from 'react';
import styles from './Input.module.scss';

function renderSwitch(type, props) {
    switch (type) {
        case "select" : {
            return (<select className={`w-full ${styles.input}`}>
                {props.options.map((option, index) => (
                    <option value={option} key={index}>{option}</option>
                ))}
            </select>)
            // eslint-disable-next-line no-unreachable
            break;
        }
        case "textarea": {
            return (
                <textarea className={`w-full ${styles.textarea}`} rows={props.rows}/>
            )
            // eslint-disable-next-line no-unreachable
            break;
        }
        default: {
            return (<input type={type} className={`w-full ${styles.input}`}/>)
        }
    }
}

function Input({ type = "text", label, className, ...props }) {
    return (
        <div className={`${className} ${styles.wrapper}`}>
            <p className={styles.label}>
                {label}
            </p>
            {
                renderSwitch(type, props)
            }
        </div>
    )
}

export default Input