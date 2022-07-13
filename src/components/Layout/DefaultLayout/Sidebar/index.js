import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={`d-flex flex-column flex-shrink-0 p-3 bg-light ${styles.sidebarWrapper}`} style={{width: 280}}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg className="bi pe-none me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
        <img src="/assets/images/logo-medium.png" alt="logo" />
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/customers" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#table" /></svg>
            Khách hàng
          </Link>
        </li>
        <li>
          <Link to="/employees" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
            Cán bộ
          </Link>
        </li>
        <li>
          <Link to="/department" className="nav-link link-dark">
            <svg className="bi pe-none me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
            Đơn vị
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar