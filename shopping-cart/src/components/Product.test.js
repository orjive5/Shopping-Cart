import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Product from './Product';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('render content div', () => {
    render(
        <Router>
            <Product />
        </Router>
    );

    const productContainer = screen.getByTestId('product-container');

    expect(productContainer).toBeInTheDocument();
    expect(productContainer).toHaveClass('product');
});

test('render image div', () => {
    render(
        <Router>
            <Product />
        </Router>
    );

    const imageContainer = screen.getByTestId('product-image');

    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('product-image');
});

test('render image', () => {
    render(
        <Router>
            <Product image='image source' />
        </Router>
    );

    const productImage = screen.getByAltText('product');

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'image source')
});

test('render product info div', () => {
    render(
        <Router>
            <Product />
        </Router>
    );

    const productInfo = screen.getByTestId('product-info');

    expect(productInfo).toBeInTheDocument();
});

test('render quantity selection', () => {
    render(
        <Router>
            <Product />
        </Router>
    );

    const selectQty = screen.getByTestId('select-quantity');

    expect(selectQty).toBeInTheDocument();
    expect(selectQty).toHaveClass('select-quantity');
});

const addToCartButton = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

test('add to cart', () => {
    
    const handleClick = jest.fn();
    render(
        <Product onClick={handleClick} />
    );
    const addToCart = screen.getByTestId("add-to-cart");

    expect(addToCart).toBeInTheDocument();
});