import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

// components
import { ButtonMock } from '@/components/button-mock/ButtonMock';

const mockFunc = jest.fn();

describe('ButtonMock Component', () => {
  it('Should call function on click', () => {
    render(<ButtonMock onClick={mockFunc}/>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockFunc).toHaveBeenCalled();
  });
});