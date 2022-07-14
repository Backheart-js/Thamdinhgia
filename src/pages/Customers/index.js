import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input';
import Table from '../Table';
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
          <Button type={'success'}  text={'Tạo mới'}/>
        </div>
      </div>
      <div className=''>
        <Table labels={labels} dataFromAPI={data} type={'customers'}/>
      </div>
    </div>
  )
}

export default Customers