import { screen, render } from '@testing-library/react';
import Marker from '../marker';

const characters = ['Ream', 'Leak', 'Giant'];

describe('Target Check Component', () => {
  it('#1.1 Render correctly', () => {
    render(<Marker characters={characters} />);

    const lists = screen.queryAllByRole('listitem');
    
    expect(lists.length).toBe(3);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('Ream')).toBeInTheDocument();
    expect(screen.getByText('Leak')).toBeInTheDocument();
    expect(screen.getByText('Giant')).toBeInTheDocument();
  })
})