import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// components
import { Checkbox } from '@/components/checkbox/Checkbox';
import userEvent from '@testing-library/user-event';

describe('Checkbox Component', () => {
  it('Should check checkbox at the correct time', async () => {
    render(<Checkbox/>);

    const checkbox = screen.getAllByRole('checkbox')[0];
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});