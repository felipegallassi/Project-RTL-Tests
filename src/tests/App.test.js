import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Testa o componente App.js', () => {
  it('deveria ter no primeiro link o texto "Home";', () => {
    renderWithRouter(<App />);
    const Link1 = screen.getByRole('link', { name: 'Home' });
    expect(Link1).toBeInTheDocument();
  });

  it('deveria ter no segundo link o texto "About";', () => {
    renderWithRouter(<App />);
    const Link2 = screen.getByRole('link', { name: 'About' });

    expect(Link2).toBeInTheDocument();
  });

  it('deveria ter no terceiro link o texto "Favorite Pokémons";', () => {
    renderWithRouter(<App />);
    const Link3 = screen.getByRole('link', { name: 'Favorite Pokémons' });

    expect(Link3).toBeInTheDocument();
  });

  it('deveria redirecionar para a página inicial ao clicar no link "Home";', () => {
    renderWithRouter(<App />);
    const Link1 = screen.getByRole('link', { name: 'Home' });
    expect(Link1).toBeInTheDocument();
    userEvent.click(Link1);
    const HeadingPokedex = screen.getByRole('heading', { name: 'Pokédex' });
    expect(HeadingPokedex).toBeInTheDocument();
  });

  it('deveria redirecionar para a página about ao clicar no link "About";', () => {
    renderWithRouter(<App />);
    const Link2 = screen.getByRole('link', { name: 'About' });
    expect(Link2).toBeInTheDocument();
    userEvent.click(Link2);
    const HeadingAbout = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(HeadingAbout).toBeInTheDocument();
  });

  it('deveria redirecionar para Pokémons Favoritados ao clicar em "Favorite Pokémons";',
    () => {
      renderWithRouter(<App />);
      const Link3 = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(Link3).toBeInTheDocument();
      userEvent.click(Link3);
      const HeadingFavPoke = screen.getByRole('heading', { name: 'Favorite pokémons' });
      expect(HeadingFavPoke).toBeInTheDocument();
    });

  it('deveria redirecionar para a página NotFound caso a URL não exista', () => {
    const { customHistory } = renderWithRouter(<App />);
    customHistory.push('/asjkbasja');
    const NotFound = screen.getByRole('heading',
      { level: 2, name: /Page requested not found/i });
    expect(NotFound).toBeInTheDocument();
  });
});
