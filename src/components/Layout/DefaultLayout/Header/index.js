import React from 'react';
import images from '../../../../assets/images';
import styles from './Header.module.scss'

function Header() {
  return (
    <nav className={`navbar navbar-expand-lg bg-light ${styles.navbarWrapper}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="navbar-logo" src={images.logo} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-full">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NGUYỄN VĂN TOÀN
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">Thông tin tài khoản</a>
                </li>
                <li><a className="dropdown-item" href="#">Cài đặt</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header