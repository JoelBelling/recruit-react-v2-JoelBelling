import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as styles from './register.module.scss';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Register User</h2>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form data:', values);
        }}
      >
        <Form>
          <div className={styles.row}>
            <label className={styles.label} htmlFor='username'>
              Username
            </label>
            <Field
              className={styles.inputTxt}
              type='text'
              id='username'
              name='username'
              placeholder='Enter your username'
              aria-label='Username'
              aria-required='true'
            />
            <ErrorMessage
              name='username'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor='password'>
              Password
            </label>
            <Field
              className={styles.inputTxt}
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              aria-required='true'
              autoComplete='new-password'
            />
            <ErrorMessage
              name='password'
              component='div'
              className={styles.error}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.label} htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <Field
              className={styles.inputTxt}
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm your password'
              aria-required='true'
              autoComplete='new-password'
            />
            <ErrorMessage
              name='confirmPassword'
              component='div'
              className={styles.error}
            />
          </div>

          <button
            className={styles.button}
            type='submit'
            aria-label='Submit Registration'
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};
