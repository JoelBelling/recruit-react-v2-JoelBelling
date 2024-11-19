import React, { useState } from 'react';
import { BurgerIcon } from './BurgerIcon';
import { SideMenu } from './SideMenu';
import * as styles from './mobile-menu.module.scss';

export const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <BurgerIcon onClick={toggleMenu} isMenuOpen={isMenuOpen} />
      <SideMenu isOpen={isMenuOpen} toggleMenu={setIsMenuOpen} />
    </div>
  );
};
