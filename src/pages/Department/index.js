import React, { useState } from 'react'

import styles from '../Page.module.scss'

import Input from '../../components/Input'
import Button from '../../components/Button'
import DefaultModal from '../../components/Modal/DefaultModal';
import NotiModal from '../../components/Modal/NotiModal';
import Table from '../../components/Table';

const labels = ['STT','MÃ ĐƠN VỊ','TÊN ĐƠN VỊ'];
const data = [
  {
    stt:1,
    ma_dv: 'DV01',
    ten_dv: 'Agribank'
  }
]

function Department() {

  const [isOpenDFModal, setIsOpenDFModal] = useState(false);
  const [isOpenNFModal, setIsOpenNFModal] = useState(false);
  const [title, setTitle] = useState('');

  const openModal = (e) => {
    e.preventDefault();
    e.target.title === 'agree' ? setIsOpenNFModal(prev => !prev) : setIsOpenDFModal(prev => !prev);
    setTitle(e.target.title);
  }

  return (
    <div children="container-fluid">
      <div className="row">
        <Input label={"Mã đơn vị"} className={`col-lg-4`}/>
        <Input type={'select'} label={'Tên đơn vị'} className={`col-lg-4`} options={['']} />
        <div className="col-lg-1"></div>
        <div className={`col-lg-2 ${styles.btnWrapper}`}>
          <Button type={'primary'}  text={'Tìm kiếm'}/>
          <Button type={'success'}  text={'Tạo mới'} title={'add'}/>
        </div>
      </div>
      <div className={``}>
        <Table labels={labels} dataFromAPI={data} type={'department'}/>
      </div>
      <DefaultModal isOpen={isOpenDFModal} setIsOpen={setIsOpenDFModal} title={title} />
      <NotiModal isOpen={isOpenNFModal} setIsOpen={setIsOpenNFModal} title={title} />
    </div>
  )
}

export default Department