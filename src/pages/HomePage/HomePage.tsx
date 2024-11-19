import React from 'react';
import * as styles from './home-page.module.scss';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <h2>Home Page</h2>
      <p>
        <strong>1 - Mobile Menu:</strong> Added a mobile menu (mobile first),
        that becomes visible when the screen is below a specific breakpoint.
      </p>

      <p>
        I also placed these in a seperate components folder and pieced a few
        smaller components together.
      </p>

      <p>
        <strong>2 - Web Menu:</strong> Added a simple web menu to display
        responsive design on larger screens.
      </p>

      <p>
        <strong>3 - Registration Page:</strong> Added a registration page using
        Formik and Yup validation. I also added some accesibility tags to help
        meet requirements. I made this mobile first and responsive down to
        280px.
      </p>

      <p>
        <strong>4 - Click on Back:</strong> I added links for Home and
        Registration along with react router. If you navigate to a page and
        click the back button in the brower you are returned to the previous
        page.
      </p>

      <p>
        <strong>5 - Unit Tests:</strong> I added unit tests for a lot of the new
        components added, these could be fleshed out further to get bettter code
        coverage.
      </p>

      <p>
        <strong>Packages Added:</strong> formik, yup, react-dom,
        react-router-dom, react-responsive and @testing-library/user-event
      </p>

      <p>
        <strong>PS:</strong> There more that could be done here to improve the
        reusability of CSS colours, breakpoints etc. Making then globally
        reusable. And the simple ui design I used would much better if designed
        by a ui/ux professional designer.
      </p>
    </main>
  );
};
