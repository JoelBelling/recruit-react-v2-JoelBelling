import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './side-menu.module.scss';

interface Props {
  isOpen: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu = ({ isOpen, toggleMenu }: Props) => {
  const handleLinkClick = () => {
    toggleMenu((prev) => !prev);
  };

  return (
    <nav
      className={`${styles.sideMenu} ${isOpen ? styles.open : styles.closed}`}
      aria-hidden={!isOpen}
      aria-label='Side menu'
    >
      <ul>
        <li>
          <Link onClick={handleLinkClick} to='/register'>
            Register
          </Link>
        </li>
        <li>
          <Link onClick={handleLinkClick} to='/'>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};
