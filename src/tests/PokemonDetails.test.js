import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

const IMG1 = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
const IMG2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';

describe('Testa o componente PokemonDetails.js', () => {
  it('deveria mostar as informações detalhadas na tela', () => {
    renderWithRouter(<App />);
    const MoreDetails = screen.getByRole('link', { name: /More details/i });
    expect(MoreDetails).toBeInTheDocument();
    userEvent.click(MoreDetails);
    const PokeDetails = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(PokeDetails).toBeInTheDocument();
    expect(MoreDetails).not.toBeInTheDocument();
    const Summary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
    expect(Summary).toBeInTheDocument();
    const Paragraph = screen.getByText(/roasts hard berries with electricity/i);
    expect(Paragraph).toBeInTheDocument();
  });

  it('deveria mostar uma seção com os mapas e as localizações', () => {
    renderWithRouter(<App />);
    const MoreDetails = screen.getByRole('link', { name: /More details/i });
    expect(MoreDetails).toBeInTheDocument();
    userEvent.click(MoreDetails);
    const Heading = screen.getByRole(
      'heading', { level: 2, name: 'Game Locations of Pikachu' },
    );
    expect(Heading).toBeInTheDocument();
    const local1 = screen.getByText('Kanto Viridian Forest');
    expect(local1).toBeInTheDocument();
    const local2 = screen.getByText('Kanto Power Plant');
    expect(local2).toBeInTheDocument();
    const Img = screen.getAllByRole('img');
    const ImgAlt = screen.getAllByAltText('Pikachu location');
    expect(Img[1]).toHaveAttribute('src', IMG1);
    expect(Img[2]).toHaveAttribute('src', IMG2);
    expect(ImgAlt[0]).toBeInTheDocument();
  });

  it('deveria poder favoritar através da pág de detalhes', () => {
    renderWithRouter(<App />);
    const MoreDetails = screen.getByRole('link', { name: /More details/i });
    expect(MoreDetails).toBeInTheDocument();
    userEvent.click(MoreDetails);
    const CheckBoxBtn = screen.getByRole('checkbox');
    expect(CheckBoxBtn).toBeDefined();
    const labelcheck = screen.getByLabelText('Pokémon favoritado?');
    expect(labelcheck).toBeInTheDocument();
    userEvent.click(CheckBoxBtn);
    const CheckTrue = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(CheckTrue).toBeDefined();
  });
});
