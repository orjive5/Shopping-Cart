import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('render nav', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    
    const navbar = screen.getByRole('navigation')

    expect(navbar).toBeInTheDocument();
})

test('render h2 element', () => {
      render(
    <Router>
      <App />
    </Router>,
  );
  expect(screen.getByText('The quality authentic katanas')).toBeInTheDocument();
})

test('renders logo image', () => {
    render(
        <Router>
            <App />
        </Router>,
    );

    const samuraiLogo = screen.getByAltText('samurai logo');
    expect(samuraiLogo).toBeInTheDocument();
    expect(samuraiLogo.src).toContain('images/samurai-logo.png')
})

test('renders logo text', () => {
    render(
        <Router>
            <App />
        </Router>,
    );
    const samuraiLogoText = screen.getByTestId('logo-text');
    expect(samuraiLogoText).toBeInTheDocument();
})

test('render main', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    
    const mainContent = screen.getByRole('main')

    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveClass('home-main')
})

test('render h1 element', () => {
      render(
    <Router>
      <App />
    </Router>,
  );
  expect(screen.getByText('SEVEN SAMURAI')).toBeInTheDocument();
})

test('render p element', () => {
      render(
    <Router>
      <App />
    </Router>,
      );
    
    const sevenSamuraiStore = screen.getByTestId('seven-samurai-store')
    expect(sevenSamuraiStore).toBeInTheDocument();
    expect(sevenSamuraiStore.textContent).toContain('Seven Samurai Store was founded in 2001 in Tokyo Japan')
})

test('render footer', () => {
    render(
        <Router>
            <App />
        </Router>
    );

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument();
})

test('made by', () => {
    render(
        <Router>
            <App />
        </Router>
    );

    const madeBy = screen.getByText('Made by orjive5')
    expect(madeBy).toBeInTheDocument();
})

test('render github icon', () => {
    render(
        <Router>
            <App />
        </Router>
    )

    const githubIcon = screen.getByTestId('github-icon')
    expect(githubIcon).toBeInTheDocument();
})