import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { MobileMenu } from './components/MobileMenu';
import * as styles from './app.module.scss';
import { WebMenu } from './components/WebMenu';

export const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <Router>
      {isMobile ? <MobileMenu /> : <WebMenu />}

      <h1 className={styles.demo}>{/* force css to load */}</h1>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};
