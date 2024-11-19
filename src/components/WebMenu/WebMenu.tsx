import React from 'react';
import * as styles from './web-menu.module.scss';
import { Link, useLocation } from 'react-router-dom';

export const WebMenu = () => {
  const location = useLocation();
  return (
    <nav className={styles.container} aria-label='Main menu'>
      <Link
        className={styles.menuLink}
        to='/'
        aria-current={location.pathname === '/' ? 'page' : undefined}
      >
        Home
      </Link>
      <Link
        className={styles.menuLink}
        to='/register'
        aria-current={location.pathname === '/register' ? 'page' : undefined}
      >
        Register
      </Link>
    </nav>
  );
};
