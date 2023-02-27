// import { render } from '@testing-library/react';
// import App from './App';

// describe('App ', () => {
//   it('renders without crash', () => {
//     render(<App />);
//   });
// });

import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import App from './App';

// jest.mock('./hooks/useFetchRestaurants.ts', () => () => fixtures.products);
jest.mock('./hooks/useFetchRestaurants.ts');

test('App', () => {
  render(<App />);

  screen.getByText('메가반점');
});
