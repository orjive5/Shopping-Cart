import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Contact from './Contact';
import { BrowserRouter as Router } from 'react-router-dom';

test('render nav', () => {
    render(
        <Router>
            <Contact />
        </Router>
    );

    const navbar = screen.getByRole('navigation');

    expect(navbar).toBeInTheDocument();
})

test('renders logo image', () => {
    render(
        <Router>
            <Contact />
        </Router>,
    );

    const samuraiLogo = screen.getByAltText('samurai logo');

    expect(samuraiLogo).toBeInTheDocument();
    expect(samuraiLogo.src).toContain('images/samurai-logo.png')
})

test('renders logo text', () => {
    render(
        <Router>
            <Contact />
        </Router>,
    );

    const samuraiLogoText = screen.getByTestId('logo-text-contact');

    expect(samuraiLogoText).toBeInTheDocument();
})

test('render main', () => {
    render(
        <Router>
            <Contact />
        </Router>
    )

    const mainContent = screen.getByRole('main')

    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveClass('main-contact');
})

test('render contact info', () => {
    render(
        <Router>
            <Contact />
        </Router>
    );

    const contactInfo = screen.getByTestId('contact-info-id');

    expect(contactInfo).toBeInTheDocument();
    expect(contactInfo).toHaveClass('contact-info');
})

test('render contact info header', () => {
    render(
        <Router>
            <Contact />
        </Router>
    );

    const mainHeader = screen.getByText('SEVEN SAMURAI STORE, Inc.');

    expect(mainHeader).toBeInTheDocument();
})

test('render contact info paragraph', () => {
    render(
        <Router>
            <Contact />
        </Router>
    );

    const mainParagraph = screen.getByTestId('contact-info-p');

    expect(mainParagraph).toBeInTheDocument();
})

test('made by', () => {
    render(
        <Router>
            <Contact />
        </Router>
    );

    const madeBy = screen.getByText('Made by orjive5')
    expect(madeBy).toBeInTheDocument();
})

test('render github icon', () => {
    render(
        <Router>
            <Contact />
        </Router>
    )

    const githubIcon = screen.getByTestId('github-icon')
    expect(githubIcon).toBeInTheDocument();
})