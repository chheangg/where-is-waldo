import { screen, render } from '@testing-library/react';
import TargetCheck from '../target-check';

const characters = ['Ream', 'Leak', 'Giant'];

describe('Target Check Component', () => {
  it('#1.1 Render correctly', () => {
    render(<TargetCheck characters={characters} />);

    const lists = screen.queryAllByRole('listitem');
    
    expect(lists.length).toBe(3);
    expect(screen.getByText('Ream')).toBeInTheDocument();
    expect(screen.getByText('Leak')).toBeInTheDocument();
    expect(screen.getByText('Giant')).toBeInTheDocument();
  })
})