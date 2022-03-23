import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

const Img = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
const pathRoute = '/pokemons/25';
const MoreDetails = 'More details';

describe('Testa o componente Pokemon.js', () => {
  it('deveria renderizar um card com as infos do pokemon', () => {
    renderWithRouter(<App />);
    const Poke = screen.getByTestId('pokemon-type');
    expect(Poke).toHaveTextContent('Electric');
    const cardName = screen.getByText('Pikachu');
    expect(cardName).toBeInTheDocument();
    const cardType = screen.getAllByText('Electric');
    expect(cardType[0]).toBeInTheDocument();
    const cardWeight = screen.getByText('Average weight: 6.0 kg');
    expect(cardWeight).toBeInTheDocument();
    const Imagem = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(Imagem).toHaveAttribute('src', Img);
    const ImgAlt = screen.getByAltText('Pikachu sprite');
    expect(ImgAlt).toBeInTheDocument();
  });

  it('deveria renderizar um card com as infos do pokemon', () => {
    renderWithRouter(<App />);
    const Details = screen.getByRole('link', { name: MoreDetails });
    expect(Details).toBeInTheDocument();
    expect(Details).toHaveAttribute('href', pathRoute);
  });

  it('deveria redirecionar para a pag de infos do pokemon', () => {
    renderWithRouter(<App />);
    const Details = screen.getByRole('link', { name: MoreDetails });
    expect(Details).toBeInTheDocument();
    userEvent.click(Details);
    const CardDetails = screen.getByRole('heading', { name: 'Pikachu Details' });
    expect(CardDetails).toBeInTheDocument();
  });

  it('deveria existir um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<App />);
    const Details = screen.getByRole('link', { name: MoreDetails });
    expect(Details).toBeInTheDocument();
    userEvent.click(Details);
    const favoriteCheckbox = screen.getByRole('checkbox');
    userEvent.click(favoriteCheckbox);
    const star = screen.getByRole('img', { name: /pikachu is marked/i });
    expect(star).toBeDefined();
    expect(star).toHaveAttribute('src', '/star-icon.svg');
  });
});
