import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { WebMenu } from './WebMenu';

describe('WebMenu', () => {
  it('renders the menu links', () => {
    render(
      <MemoryRouter>
        <WebMenu />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('sets the aria-current="page" on the "Home" link when on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <WebMenu />
      </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Register')).not.toHaveAttribute('aria-current');
  });

  it('sets the aria-current="page" on the "Register" link when on the register page', () => {
    render(
      <MemoryRouter initialEntries={['/register']}>
        <WebMenu />
      </MemoryRouter>
    );

    const registerLink = screen.getByText('Register');
    expect(registerLink).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
  });

  it('does not set aria-current on links when the current path does not match', () => {
    render(
      <MemoryRouter initialEntries={['/other']}>
        <WebMenu />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
    expect(screen.getByText('Register')).not.toHaveAttribute('aria-current');
  });
});
