import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { RegisterPage } from './RegisterPage';

jest.spyOn(console, 'log').mockImplementation(() => {});

describe('RegisterPage', () => {
  beforeEach(() => {
    render(<RegisterPage />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with all fields and the submit button', () => {
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Submit Registration' })
    ).toBeInTheDocument();
  });

  it('shows validation errors for empty fields when submitted', async () => {
    const user = userEvent.setup();
    const submitButton = screen.getByRole('button', {
      name: 'Submit Registration',
    });

    await userEvent.click(submitButton);

    expect(await screen.findByText('Username is required')).toBeInTheDocument();
    expect(await screen.findByText('Password is required')).toBeInTheDocument();
    expect(
      await screen.findByText('Confirm password is required')
    ).toBeInTheDocument();
  });

  it('shows an error if username is less than 3 characters', async () => {
    const usernameInput = screen.getByLabelText('Username');
    const submitButton = screen.getByRole('button', {
      name: 'Submit Registration',
    });

    await userEvent.type(usernameInput, 'ab');
    await userEvent.click(submitButton);

    expect(
      await screen.findByText('Username must be at least 3 characters')
    ).toBeInTheDocument();
  });

  it('shows an error if password is less than 6 characters', async () => {
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', {
      name: 'Submit Registration',
    });

    await userEvent.type(passwordInput, '12345');
    await userEvent.click(submitButton);

    expect(
      await screen.findByText('Password must be at least 6 characters')
    ).toBeInTheDocument();
  });

  it('shows an error if passwords do not match', async () => {
    const user = userEvent.setup();
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByRole('button', {
      name: 'Submit Registration',
    });

    await user.type(passwordInput, 'password123');
    await user.type(confirmPasswordInput, 'differentPassword');
    await user.click(submitButton);

    expect(await screen.findByText('Passwords must match')).toBeInTheDocument();
  });

  it('calls onSubmit with the correct values when the form is valid', async () => {
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    const submitButton = screen.getByRole('button', {
      name: 'Submit Registration',
    });

    await userEvent.type(usernameInput, 'validUsername');
    await userEvent.type(passwordInput, 'validPassword123');
    await userEvent.type(confirmPasswordInput, 'validPassword123');
    await userEvent.click(submitButton);

    expect(console.log).toHaveBeenCalledWith('Form data:', {
      username: 'validUsername',
      password: 'validPassword123',
      confirmPassword: 'validPassword123',
    });
  });
});
