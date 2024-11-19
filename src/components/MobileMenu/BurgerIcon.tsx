import React, { useState } from 'react';
import * as styles from './burger-icon.module.scss';

interface Props {
  onClick: () => void;
  isMenuOpen: boolean;
}

export const BurgerIcon = ({ onClick, isMenuOpen }: Props) => {
  return (
    <nav>
      <button
        className={styles.burgerContainer}
        onClick={onClick}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={styles.burger}></span>
        <span className={styles.burger}></span>
        <span className={styles.burger}></span>
      </button>
    </nav>
  );
};
