import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// components
import { AsyncAwait } from '@/components/async-await/AsyncAwait';

describe('AsyncAwait Component', () => {
  it('Should execute async await properly', async () => {
    render(<AsyncAwait/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const paragraph = await screen.findByText('My text...');
    expect(paragraph).toBeInTheDocument();
  });
});