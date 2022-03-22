import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

const ImageAdress = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

describe('Testa o componente NotFound.js', () => {
  it('deveria ter um heading h2 com o texto Page requested not found 😭', () => {
    const { customHistory } = renderWithRouter(<App />);
    customHistory.push('/asjkbasja');
    const NotFound = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    expect(NotFound).toBeInTheDocument();
    const image = screen.getByAltText(/Pikachu crying because/i);
    expect(image).toHaveAttribute('src', ImageAdress);
  });
});
