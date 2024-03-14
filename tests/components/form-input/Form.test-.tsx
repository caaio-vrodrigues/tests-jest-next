import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// components
import { Form } from '@/components/form/Form';

describe('Form Component', () => {
  describe('Renderization', () => {
    it('Should render the input and have a disabled button', () => {
      render(<Form/>);
  
      const input = screen.getByPlaceholderText('New Todo');
      expect(input).toBeInTheDocument();
  
      const button = screen.getByTestId('form-button');
      expect(button).toBeDisabled();
    });
  });

  describe('Behavior', () => {
    it('Should enable the submit button when text is typed', async () => {
      render(<Form/>);

      const input = screen.getByPlaceholderText('New Todo');
      await userEvent.type(input, 'Testing input value');

      const button = screen.getByRole('button', {
        name: 'Submit',
      });

      expect(input).toHaveValue('Testing input value');
      expect(button).toBeEnabled();
    });
  });
});