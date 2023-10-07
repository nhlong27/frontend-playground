import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ButtonComp from './Button';
import { vi } from 'vitest';

describe('Button component', () => {
  it('renders a button', () => {
    render(<ButtonComp />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('allows the user to pass a button text', () => {
    render(<ButtonComp text='Click me' />);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('allows the user to pass a click handler', async () => {
    const dummyClickHandler = vi.fn();
    render(<ButtonComp text='Click me' onClick={dummyClickHandler} />);

    // Simulate a user clicking the button
    const user = userEvent.setup();
    await user.click(screen.getByText(/Click me/));

    // Check the click handler was called
    expect(dummyClickHandler).toHaveBeenCalled();
  });
});
