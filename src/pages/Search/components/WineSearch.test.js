import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WineSearch from './WineSearch';

describe('Search', () => {
  test('handles search with no results', () => {
    render(
      <BrowserRouter>
        <WineSearch
          suggestions={[
            {
              lotCode: '11YVCHAR001',
              volume: 1000.0,
              description: '2011 Yarra Valley Chardonnay',
              tankCode: 'T25-01',
            },
          ]}
        />
      </BrowserRouter>,
    );

    const input = screen.getByTestId('wine-autocomplete-field-input');
    fireEvent.change(input, { target: { value: '11YVCHAR0012345' } });

    const emptyResultsText = screen.getByText(
      /No wines match your search query./i,
    );
    expect(emptyResultsText).toBeInTheDocument();
  });

  test('handles item with no description', () => {
    render(
      <BrowserRouter>
        <WineSearch
          suggestions={[
            {
              lotCode: '11YVCHAR001',
              volume: 1000.0,
              description: null,
              tankCode: 'T25-01',
            },
          ]}
        />
      </BrowserRouter>,
    );

    const input = screen.getByTestId('wine-autocomplete-field-input');
    fireEvent.change(input, { target: { value: '11YVCHAR001' } });

    const emptyDescriptionText = screen.getByText(/No description provided/i);
    expect(emptyDescriptionText).toBeInTheDocument();
  });
});
