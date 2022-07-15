import React, { useState } from 'react'

import styles from '../Page.module.scss'

import Button from '../../components/Button'
import Input from '../../components/Input';
import DefaultModal from '../../components/Modal/DefaultModal';
import NotiModal from '../../components/Modal/NotiModal';
import Table from '../../components/Table';

const labels = ['MÃ NHÂN VIÊN','HỌ TÊN','USERNAME','PASSWORD','MÃ ĐƠN VỊ','MÃ PHÒNG BAN','ROLE'];
const data = [
  { ma_nv: 'NV01',
    ten: 'Bùi Văn Trường',
    username: 'truong123',
    password: '123456',
    ma_dv: 'DV01',
    ma_pb: 'PB02',
    role: 'nhân viên',
  },
]

function Employees() {
  const [isOpenDFModal, setIsOpenDFModal] = useState(false);
  const [isOpenNFModal, setIsOpenNFModal] = useState(false);
  const [title, setTitle] = useState('');

  const openModal = (e) => {
    e.preventDefault();
    e.target.title === 'agree' ? setIsOpenNFModal(prev => !prev) : setIsOpenDFModal(prev => !prev);
    setTitle(e.target.title);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Input label={"Mã nhân viên"} className={`col-lg-4`}/>
        <Input label={"Họ tên"} className={`col-lg-4`}/>
        <Input label={"Username"} className={`col-lg-4`}/>
        <Input type={"select"} label={"Mã đơn vị"} className={`col-lg-4`} options={['DV01', 'DV02']}/>
        <Input type={"select"} label={"Mã phòng ban"} className={`col-lg-4`} options={['PB01', 'PB02']}/>
        <div className={`col-lg-4 ${styles.btnWrapper}`}>
          <Button type={'primary'}  text={'Tìm kiếm'}/>
          <Button type={'success'}  text={'Tạo mới'} title={'add'} onClick={openModal}/>
        </div>
      </div>
      <div className=''>
        <Table onClick={openModal} labels={labels} dataFromAPI={data} type={'customers'}/>
      </div>
      <DefaultModal isOpen={isOpenDFModal} setIsOpen={setIsOpenDFModal} title={title}/>
      <NotiModal isOpen={isOpenNFModal} setIsOpen={setIsOpenNFModal} title={title}/>
      
    </div>
  )
}

export default Employees