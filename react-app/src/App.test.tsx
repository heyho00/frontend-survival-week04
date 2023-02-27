import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('App', async () => {
  render(<App />);

  await waitFor(() => {
    screen.getByText('메가반점');
    // 안에 있는 이게 될때까지 기다린다. 될때까지 확인한다라는 개념이라함.
  });
});
