import React from 'react';
import styles from './Table.module.scss'

function Table({ labels, dataFromAPI, type }) {
  return (
    <table className="table">
        <thead>
            <tr>
                {labels.map((label, index) => (
                    <th scope="col" key={index}>{label}</th>
                ))}
                <th scope="col">TÁC VỤ</th>
            </tr>
        </thead>
        <tbody>
            {dataFromAPI.map((data,index) => (
                <tr key={index}>
                    {Object.values(data).map((value, index) => {
                        if(index === 1 && type === 'customers') {
                            return (
                                <td key={index} className={`${styles.column}`}>
                                    <a href="" className={`${styles.columnLink}`}>{value}</a>
                                </td>
                            ) 
                        } 
                        else {
                            return (
                                <td key={index} className={styles.column}>{value}</td>
                            )
                        }
                    }
                    )}
                    <td>
                        <a href="" className={styles.linkPopup}>
                            <i class={`bi bi-person ${styles.icon}`}></i>
                        </a>
                        <a href="" className={styles.linkPopup}>
                            <i class={`bi bi-check-circle-fill ${styles.icon}`}></i>
                        </a>
                        <a href="" className={styles.linkPopup}>
                            <i class={`bi bi-x-circle-fill ${styles.icon}`}></i>
                        </a>
                    </td>
                </tr>    
            ))}
        </tbody>
    </table>
  )
}

export default Table