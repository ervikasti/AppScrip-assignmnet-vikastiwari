import React from 'react';
import styles from './Mobilemenu.module.css';

const MobileMenu = ({ items }) => {
  return (
    <div className={styles.mobile_menu}>
      {items.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
      ))}
    </div>
  );
};

export default MobileMenu;