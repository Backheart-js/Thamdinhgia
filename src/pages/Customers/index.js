import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input';
import styles from './Customers.module.scss';

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
          <Button style={'primary'}  text={'Tìm kiếm'}/>
          <Button style={'success'}  text={'Tạo mới'}/>
        </div>
      </div>
    </div>
  )
}

export default Customers