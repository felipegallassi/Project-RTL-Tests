import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Testa o componente FavoritePokemon.js', () => {
  it('deveria  exibir "No favorite pokemon found", se não tiver pokémons favoritos.;',
    () => {
      renderWithRouter(<App />);
      const Link3 = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(Link3).toBeInTheDocument();
      userEvent.click(Link3);
      const HeadingFavPoke = screen.getByText('No favorite pokemon found');
      expect(HeadingFavPoke).toBeInTheDocument();
    });

  it('deveria exibir todos os cards de  Pokémons favoritos', () => {
    renderWithRouter(<App />);
    const Details = screen.getByRole('link', { name: 'More details' });
    expect(Details).toBeInTheDocument();
    userEvent.click(Details);
    const FavCheckbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    expect(FavCheckbox).toBeInTheDocument();
    userEvent.click(FavCheckbox);
    const Favorites = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(Favorites).toBeInTheDocument();
    userEvent.click(Favorites);
    const FavPoke = screen.getByRole('link', { name: 'More details' });
    expect(FavPoke).toBeInTheDocument();
  });
});
