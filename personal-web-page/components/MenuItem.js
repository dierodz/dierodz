import React from 'react'
import styles from '../styles/components/NavMenu.module.scss';

function MenuItem({ children, isActive, onClick }) {
  return (
    <li className={[styles.menuItem, isActive ? styles.active : ''].join(' ')} onClick={onClick}>
      <label>{children}</label>
      <div><div className={styles.dot} /></div>
    </li>
  )
}

export default MenuItem
