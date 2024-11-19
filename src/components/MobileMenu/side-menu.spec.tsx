import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideMenu } from './SideMenu';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

describe('SideMenu Component', () => {
  const mockToggleMenu = jest.fn();

  it('renders the side menu when open', () => {
    render(
      <MemoryRouter>
        <SideMenu isOpen={true} toggleMenu={mockToggleMenu} />
      </MemoryRouter>
    );

    const sideMenu = screen.getByRole('navigation');
    expect(sideMenu).toHaveAttribute('aria-hidden', 'false');
  });

  it('has the correct aria-label', () => {
    render(
      <MemoryRouter>
        <SideMenu isOpen={true} toggleMenu={mockToggleMenu} />
      </MemoryRouter>
    );

    const sideMenu = screen.getByRole('navigation');
    expect(sideMenu).toHaveAttribute('aria-label', 'Side menu');
  });

  it('renders the Register link correctly', () => {
    render(
      <MemoryRouter>
        <SideMenu isOpen={true} toggleMenu={mockToggleMenu} />
      </MemoryRouter>
    );

    const registerLink = screen.getByRole('link', { name: /register/i });
    expect(registerLink).toBeInTheDocument();
    expect(registerLink).toHaveAttribute('href', '/register');
  });

  it('renders the Home link correctly', () => {
    render(
      <MemoryRouter>
        <SideMenu isOpen={true} toggleMenu={mockToggleMenu} />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
