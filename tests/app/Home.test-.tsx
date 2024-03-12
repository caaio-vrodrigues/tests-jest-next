import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// components 
import Home from '@/app/page';

describe('Home Page', () => {
  it('Should render paragraph on button click', () => {
    render(<Home/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const paragraph = screen.getByText('Hello World! I am Caio.');
    expect(paragraph).toBeInTheDocument();
  });
});