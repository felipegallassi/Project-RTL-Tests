import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

const ImgAdress = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('Testa o componente About.js', () => {
  it('deveria conter as infos sobre a Pokédex', () => {
    renderWithRouter(<App />);
    const Link2 = screen.getByRole('link', { name: 'About' });
    expect(Link2).toBeInTheDocument();
    userEvent.click(Link2);
    const HeadingAbout = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
    expect(HeadingAbout).toBeInTheDocument();
    const Paragrafo1 = screen.getByText(/encyclopedia containing all Pokémons/i);
    expect(Paragrafo1).toBeInTheDocument();
    const Paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(Paragrafo2).toBeInTheDocument();
    const Imagem = screen.getByRole('img');
    expect(Imagem).toHaveAttribute('src', ImgAdress);
  });
});
