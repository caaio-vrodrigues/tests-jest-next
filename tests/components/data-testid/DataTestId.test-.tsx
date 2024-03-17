import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// components
import { DataTestId } from '@/components/data-testid/DataTestId';

describe('GetByTestId Component', () => {
  it('Should get article element by data-testid', () => {
    render(<DataTestId/>);

    const article = screen.getByTestId('article-test');
    expect(article).toBeInTheDocument();
  });
});