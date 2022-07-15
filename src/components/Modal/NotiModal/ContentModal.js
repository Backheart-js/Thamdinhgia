import React from 'react'
import styles from './NotiModal.module.scss'

function ContentModal({ title, className }) {
  {
    switch (title) {
        case 'agree': {
            return (
                <div className={className}>
                    <span>Đồng ý với giá sơ bộ !</span>
                </div>
            )
        }
        default: {
            
        }
    }
  }
}

export default ContentModal