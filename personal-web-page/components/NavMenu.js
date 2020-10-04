import { useState } from 'react';
import styles from '../styles/components/NavMenu.module.scss';
import MenuItem from './MenuItem';

function NavMenu({ onSelect, selected }) {
  return (
    <nav className={styles.navMenu}>
      <div className={[styles.line, styles.lineTop].join(' ')} />
      <ul>
        <MenuItem isActive={selected === 0} onClick={() => onSelect(0)}>landing</MenuItem>
        <MenuItem isActive={selected === 1} onClick={() => onSelect(1)}>sobre mí</MenuItem>
        <MenuItem isActive={selected === 2} onClick={() => onSelect(2)}>skills</MenuItem>
        <MenuItem isActive={selected === 3} onClick={() => onSelect(3)}>contacto</MenuItem>
      </ul>
      <div className={[styles.line, styles.lineBottom].join(' ')} />
    </nav>
  )
}

export default NavMenu
