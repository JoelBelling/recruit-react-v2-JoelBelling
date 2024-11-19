import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BurgerIcon } from './BurgerIcon';

describe('BurgerIcon', () => {
  it('should render BurgerIcon without error', () => {
    render(<BurgerIcon onClick={() => {}} isMenuOpen={false} />);
    expect(
      screen.getByRole('button', { name: /Open menu/i })
    ).toBeInTheDocument();
  });

  it('updates the aria-label based on the isMenuOpen prop', async () => {
    const mockOnClick = jest.fn();
    const { rerender } = render(
      <BurgerIcon onClick={mockOnClick} isMenuOpen={false} />
    );

    const button = screen.getByRole('button', { name: /Open menu/i });
    expect(button).toHaveAttribute('aria-label', 'Open menu');

    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);

    rerender(<BurgerIcon onClick={mockOnClick} isMenuOpen={true} />);
    expect(button).toHaveAttribute('aria-label', 'Close menu');
  });
});
