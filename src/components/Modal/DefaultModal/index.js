import React from 'react'
import styles from './DefaultModal.module.scss'
import Button from '../../Button'
import Modal from '..'
import ContentModal from './ContentModal'

function DefaultModal({ isOpen, setIsOpen, type, ...props }) {
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
                        <Button onClick={() => setIsOpen(false)} type={'secondary'} text={'Hủy bỏ'} />
                        <Button type={'primary'} text={'Lưu'} />
                    </div>
                </div>
            </Modal>
        }
    </>
  )

  
}

export default DefaultModal