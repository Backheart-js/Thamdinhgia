import React from 'react'
import Input from '../../Input';

function ContentModal({ title, className }) {
    switch (title) {
        case "add" : {
            return (
                <div className={className}>
                    <h4>TẠO MỚI</h4>
                    <hr/>
                    <div className="row">
                        <Input type={"date"} label={"Ngày yêu cầu"} className={`col-lg-4`}/>
                        <Input type={"select"} label={"Đơn vị"} className={`col-lg-4`} options={['Đơn vị 1']}/>
                        <Input type={"select"} label={"Cán bộ"} className={`col-lg-4`} options={['Cán bộ 1']}/>
                        <Input label={"Khách hàng"} className={`col-lg-4`}/>
                        <Input label={"Điện thoại"} className={`col-lg-4`}/>
                        <Input label={"Số tiền vay"} className={`col-lg-4`}/>
                        <Input type={"select"} label={"Tình/TP"} className={`col-lg-4`} options={['Hà Nội','Hải Phòng']}/>
                        <Input type={"select"} label={"Quận/Huyện"} className={`col-lg-4`} options={['']}/>
                        <Input type={"select"} label={"Phường/Xã"} className={`col-lg-4`} options={['']}/>
                        <Input label={"Địa chỉ"} className={`col-lg-12`} />
                        <Input type={"textarea"} label={"Ghi chú"} className={`col-lg-12`} rows={3}/>
                        <Input type={"file"} className={`col-lg-4`} />
                    </div>
                </div>
                
            )
        }
        case 'modifier': {
            return (
                <div className={className}>
                    <h5>THÔNG TIN YÊU CẦU</h5>
                    <hr/>
                    <div className="row">
                        <Input type={"date"} label={"Ngày yêu cầu"} className={`col-lg-4`}/>
                        <Input type={"select"} label={"Đơn vị"} className={`col-lg-4`} options={['Đơn vị 1']}/>
                        <Input type={"select"} label={"Cán bộ"} className={`col-lg-4`} options={['Cán bộ 1']}/>
                        <Input label={"Khách hàng"} className={`col-lg-4`}/>
                        <Input label={"Điện thoại"} className={`col-lg-4`}/>
                        <Input label={"Số tiền vay"} className={`col-lg-4`}/>
                        <Input type={"select"} label={"Tình/TP"} className={`col-lg-4`} options={['Hà Nội','Hải Phòng']}/>
                        <Input type={"select"} label={"Quận/Huyện"} className={`col-lg-4`} options={['']}/>
                        <Input type={"select"} label={"Phường/Xã"} className={`col-lg-4`} options={['']}/>
                        <Input label={"Địa chỉ"} className={`col-lg-12`} />
                        <Input type={"textarea"} label={"Ghi chú"} className={`col-lg-12`} />
                        <Input type={"file"} className={`col-lg-4`} />
                    </div>
                    <br/>
                    <h5>BÁO GIÁ SƠ BỘ</h5>
                    <hr/>
                    <div className="row">
                        <Input label={"Giá sơ bộ / m2"} className={`col-lg-6`}/>
                        <Input label={"Tổng giá trị"} className={`col-lg-6`}/>
                        <Input type={"file"} className={`col-lg-4`} />
                    </div>
                    <br/>
                    <h5>KHẢO SÁT - THẨM ĐỊNH</h5>
                    <hr/>
                    <div className="row">
                        <Input type={"date"} label={"Ngày khảo sát"} className={`col-lg-4`}/>
                        <div className="col-lg-8"></div>
                        <Input type={"file"} className={`col-lg-4`} />
                    </div>
                    <br/>
                    <h5>CHỨNG THƯ</h5>
                    <hr/>
                    <div className="row">
                        <Input type={"date"} label={"Ngày chứng thư"} className={`col-lg-4`}/>
                        <div className='col-lg-2'></div>
                        <Input label={"Số chứng thư"} className={`col-lg-6`}/>
                        <Input label={"Đơn giá / m2"} className={`col-lg-6`}/>
                        <Input label={"Giá thẩm định"} className={`col-lg-6`}/>
                        <Input type={"file"} className={`col-lg-4`} />
                    </div>


                </div>
            )
        }
        case 'price': {
            return (
                <div className={className}>
                    <h4>BÁO GIÁ SƠ BỘ</h4>
                    <hr/>
                    <div className="row">
                        <Input label={"Phí báo giá sơ bộ"} className={`col-lg-6`}/>
                        <Input label={"Phí tạm ứng khảo sát"} className={`col-lg-6`}/>
                        <Input type={"select"} label={"Báo giá sơ bộ"} className={`col-lg-6`} options={['']}/>
                        <Input type={"select"} label={"Khảo sát"} className={`col-lg-6`} options={['']}/>
                        <Input type={"select"} label={"Lập chứng thư và Báo cáo"} className={`col-lg-6`} options={['']}/>
                    </div>
                </div>
            )
        }
        case 'delete': {
            return (
                <div className={className}>
                    <Input type={"textarea"} label={"Lý do hủy giao dịch"} className={`col-lg-12`} rows={6}/>
                </div>
            )
        }
        default: {

        }
    }
}

export default ContentModal