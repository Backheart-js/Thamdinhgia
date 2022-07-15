import React from 'react'
import Modal from '..'
import ContentModal from './ContentModal'
import Button from '../../Button'
import styles from './NotiModal.module.scss'

function NotiModal({ isOpen, setIsOpen, type, ...props }) {
  return (
    <>
        {
            isOpen && 
            <Modal>
                <div className={styles.modalContainer}>
                    <div className={styles.modalContentWrapper}>
                        <ContentModal className={styles.modalContent} title={props.title} />
                    </div>
                    <div className={styles.modalBtn}>
                        <Button type={'primary'} text={'Ok'} onClick={() => setIsOpen(false)}/>
                    </div>
                </div>
            </Modal>
        }
    </>
  )
}

export default NotiModal