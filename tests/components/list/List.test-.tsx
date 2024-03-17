import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// components
import { List } from '@/components/list/List';

const mockListItems = ['item-A', 'item-B', 'item-C'];

describe('List Component', () => {
  it('Should render list if array length is equal 3', () => {
    render(<List lis={mockListItems}/>);

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  it('Should have correct text content', () => {
    render(<List lis={mockListItems}/>);

    const items = screen.getAllByRole('listitem');
    expect(items[2]).toHaveTextContent('item-C');

    const firstItem = screen.getAllByRole('listitem')[0];
    expect(firstItem).toHaveTextContent('item-A');
  });
});