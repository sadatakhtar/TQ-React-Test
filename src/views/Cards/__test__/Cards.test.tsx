import React from 'react';
import Cards from '../Cards';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';


test('Header renders with correct text', () => {
  const component = render(
    <BrowserRouter>
      <Cards />
    </BrowserRouter>
  );
  const headerElement = component.getByTestId('header');

  expect(headerElement).toBe('Companies Information');
});
