import React, { useRef, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input';
import DefaultModal from '../../components/Modal/DefaultModal';
import NotiModal from '../../components/Modal/NotiModal';
import Table from '../../components/Table';
import styles from './Customers.module.scss';

const labels = ['NGÀY','KHÁCH HÀNG','ĐIỆN THOẠI','ĐỊA CHỈ','SỐ TIỀN VAY','TRẠNG THÁI','ĐƠN VỊ','CÁN BỘ'];
const data = [
  { ngay: '04/05/2022',
    ten: 'Bùi Văn Lương',
    dienthoai: '097 6187567',
    diachi: 'Mậu An, Lương Điền, Cẩm Giàng, Hải Dương',
    sotienvay: 1000000,
    trangthai: 'Tạo mới',
    donvi: 'Agri GB',
    canbo: 'A Hiếu'
  },
]


function Customers() {

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
        <Input type={"date"} label={"Từ ngày"} className={`col-lg-3`}/>
        <Input type={"date"} label={"Đến ngày"} className={`col-lg-3`}/>
        <Input type={"select"} label={"Đơn vị"} className={`col-lg-3`} options={['Đơn vị 1', 'Đơn vị 2']}/>
        <Input type={"select"} label={"Cán bộ"} className={`col-lg-3`} options={['Cán bộ 1', 'Cán bộ 2']}/>
        <Input label={"Khách hàng"} className={`col-lg-3`}/>
        <Input label={"Điện thoại"} className={`col-lg-3`}/>
        <Input type={"select"} label={"Trạng thái"} className={`col-lg-3`} options={['Cán bộ 1', 'Cán bộ 2']}/>
        <div className={`col-lg-3 ${styles.btnWrapper}`}>
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

export default Customers